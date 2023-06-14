import { useState } from "react";
import axios from "axios";


export const useProfile = () => {
    const [profile, setProfile] = useState(null);
    const [loadingProfile, setLoadingProgile] = useState(false);
  
    const fetchProfile = async (token) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify({
          token,
        });
        console.log(body);
        const res = await axios.post(
          "https://auction-website89.herokuapp.com/content/fetch",
          body,
          config
        );
  
        setProfile(res.data);
      } catch (error) {
        console.log(error);
        return null;
      }
    };
  
    const LogIn = async (info) => {
      // console.log(message);
  
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(info);
        const res = await axios.post(
          "https://auction-website89.herokuapp.com/bids/message",
          body,
          config
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    return {
      profile,
      setProfile,
      fetchProfile,
    };
  };