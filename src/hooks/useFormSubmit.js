import { useState } from "react";

const useFormSubmit = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (values) => {
    setIsLoading(true);

    await fetch("https://formsubmit.co/ajax/help@librumreader.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Name: values.name,
        Email: values.email,
        Message: values.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  return { submitForm, data, error, isLoading };
};

export default useFormSubmit;
