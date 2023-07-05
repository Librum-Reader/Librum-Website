import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";
import axios from "axios";

export const SiteContext = createContext({});

export const SiteContextProvider = ({ children }) => {
  const [selected, setSelected] = useState(1);
  const [mode, setMode] = useState(false);
  const [user, setUser] = useState("");

  const [bg, setBg] = useState("dark");

  const token = localStorage.getItem("token");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    if (localStorage.getItem("Theme")) {
      let theme = JSON.parse(localStorage.getItem("Theme"));

      setBg(theme);

      return;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Theme", JSON.stringify(bg));
  }, [bg]);

  const fetchUserData = async (token) => {
    const headers = {
      "X-Version": "1.0",
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.get(
        "https://librum-dev.azurewebsites.net/api/user",

        { headers }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBookData = async (token) => {
    const headers = {
      "X-Version": "1.0",
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.get(
        "https://librum-dev.azurewebsites.net/api/book",
        { headers }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <SiteContext.Provider
      value={{
        mode,
        setMode,
        user,
        setUser,
        logout,
        bg,
        setBg,
        selected,
        setSelected,
        fetchUserData,
        fetchBookData,
        token,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
