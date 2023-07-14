import { useState, useCallback, useRef } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const useFormSubmit = () => {
  const [res, setRes] = useState("");
  const [error, setError] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaRef = useRef(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const verifyToken = async (token) => {
    try {
      await fetch(
        `https://librum-dev.azurewebsites.net/api/recaptchaVerify?userToken=${token}`,
        {
          method: "POST",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.success === false) {
            throw new Error("Something went wrong!");
          }
          recaptchaRef.current = data;
        });
    } catch (err) {
      setCaptchaError(err);
    }
  };

  // const handleReCaptchaVerify = useCallback(
  //   async (e, values, captchaActionName) => {
  //     e?.preventDefault();
  //     try {
  //       const token = await executeRecaptcha(captchaActionName);
  //       if (!token) {
  //         throw new Error("Something went wrong!");
  //       }
  //       await submitForm(e, token, values);
  //     } catch (err) {
  //       console.log(err);
  //       setError(err);
  //     }
  //   },
  //   [executeRecaptcha]
  // );

  const resetStates = () => {
    setRes("");
    setError("");
    setCaptchaError("");
  };

  const submitForm = async (e, token, values) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch("https://formsubmit.co/ajax/help@librumreader.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then(async (data) => {
          if ((await data?.success) !== "true") {
            throw new Error("Something went wrong!");
          }
          setRes(data?.success);
        });
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  return {
    res,
    error,
    captchaError,
    isLoading,
    // handleReCaptchaVerify,
    resetStates,
  };
};

export default useFormSubmit;
