/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.jsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import defaultDocumentNode from "./defaultDocumentNode";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId: "46vwrypj",
  dataset: "production",
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
      defaultDocumentNode,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  // document: {
  //   // prev is the result from previous plugins and thus can be composed
  //   productionUrl: async (prev, context) => {
  //     // context includes the client and other details
  //     const { getClient, dataset, document } = context;
  //     const client = getClient({ apiVersion: "2023-05-31" });

  //     console.log("DOCUMENT", document);
  //     if (document._type === "post") {
  //       const postId = await client.fetch(
  //         `*[_type == 'routeInfo' && post._ref == $postId][0].post._ref`,
  //         { postId: document._id }
  //       );
  //       console.log("POST ID", postId);

  //       const params = new URLSearchParams();
  //       params.set("preview", "true");
  //       params.set("dataset", dataset);

  //       return `http://localhost:3000/post?${postId}?${params}`;
  //     }

  //     return prev;
  //   },
  // },
});
