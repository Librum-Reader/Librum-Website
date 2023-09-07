"use client";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadAvatar } from "@/app/utils/apiFunctions";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import "../../filepond.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);

  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  const queryClient = useQueryClient();

  const avatarUpload = useMutation({
    mutationFn: uploadAvatar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["avatar"] });
    },
  });

  return (
    <>
      <div>
        <FilePond
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={false}
          maxFiles={3}
          server={{
            url: "https://api.librumreader.com/user/profilePicture",
            headers: {
              Accept: "multipart/form-data",
              Authorization: `Bearer ${token}`,
              method: "POST",
            },
            process: (
              fieldName,
              file,
              metadata,
              load,
              error,
              progress,
              abort,
              transfer,
              options
            ) => {
              // fieldName is the name of the input field
              // file is the actual file object to send
              const formData = new FormData();
              formData.append(fieldName, file, file.name);
              progress(0, 0, 100);

              // avatarUpload.mutate({ file: formData, token: token });
              const request = fetch(
                "https://api.librumreader.com/user/profilePicture",
                {
                  headers: {
                    Accept: "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                  },
                  method: "POST",
                  body: formData,
                }
              )
                .then((response) => {
                  return response;
                })
                .then((data) => {
                  load(fieldName);
                  queryClient.invalidateQueries({ queryKey: ["avatar"] });
                  setIsUploaded(true);
                });
            },
          }}
          name="files" /* sets the file input name, it's filepond by default */
          labelIdle='Drag & Drop your avatar or <span class="filepond--label-action">Browse</span>'
        />
      </div>
    </>
  );
};

export default FileUpload;
