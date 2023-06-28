import React, { useEffect, useState } from "react";
import "./Test.css";
import axios from "axios";

export const Test = () => {
  const [loading, setLoading] = useState(true);

  const [logged, setLogged] = useState(false);
  const [userInfo, setUserinfo] = useState(null);
  const [userData, showUserData] = useState(false);
  const [bookCollections, showBooks] = useState(false);
  //   useEffect(() => {
  //     const sendData = async () => {
  //       try {
  //         const url = "https://librum-dev.azurewebsites.net/api/login";
  //         const data = {
  //           Email: "js1@protonmail.com",
  //           Password: "Abc123",
  //         };
  //         const headers = {
  //           "X-Version": "1.0",
  //         };

  //         const response = await axios.post(url, data, { headers });
  //         console.log("POST request sent successfully");
  //         console.log("Response:", response.data);
  //       } catch (error) {
  //         console.error("Error sending POST request:", error);
  //       }
  //     };

  //     sendData();
  //   }, []);

  const login = (email, password) => {
    const token = localStorage.getItem("token");

    (async () => {
      setLoading(true);
      const data = {
        Email: "js2@protonmail.com",
        Password: "Abc1234",
      };

      const headers = {
        "X-Version": "1.0",
        Authorization: `Bearer ${token}`,
      };

      try {
        const response = await axios.post(
          "https://librum-dev.azurewebsites.net/api/login",
          data,
          { headers }
        );
        console.log(response.data);
        localStorage.setItem("token", response.data);
        setLogged(true);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  };

  useEffect(() => {
    const checkLocalStorage = () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (token) {
        console.log("token is present ");
        setLoading(false);
        setLogged(true);
      }
      if (!token) {
        console.log("no token");
        setLoading(false);
      }
    };

    checkLocalStorage();
  }, []);

  const getUserData = async () => {
    const url = "https://librum-dev.azurewebsites.net/api/user";
    const token = localStorage.getItem("token");

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className=" test-page container">
      {loading && (
        <div className="standard-loading">
          <div className="lds-default">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>{" "}
        </div>
      )}

      {logged ? (
        <>
          <div className="profile-page">
            You are logged in
            <button
              className="profile-btn"
              onClick={() => {
                showUserData(!userData);
                getUserData();
              }}
            >
              {" "}
              Fetch User Data
            </button>
            {showUserData && <div>Books</div>}
          </div>
        </>
      ) : (
        <div>
          <button
            onClick={() => {
              login();
            }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};
