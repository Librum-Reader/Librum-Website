import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./News.css";
import newslogo from "./newslogo.svg";
// import bloglogo2 from "./newslogo2.svg";
import { SiteContext } from "../../Context/Context";
import NewsItem from "./NewsItem";

export const News = () => {
  const { bg, setBg } = useContext(SiteContext);
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("Theme")) {
      let theme = JSON.parse(localStorage.getItem("Theme"));

      setBg(theme);

      return;
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://librum-dev.azurewebsites.net/api/blog");
        setNews(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={
        bg === "light"
          ? {
            backgroundColor: "white",
            color: "var(--color-primary)",
          }
          : {
            backgroundColor: "#282c34",
            color: "var(--color-primary)",
          }
      }
      className="container"
    >
      <div className="news-page">
        <div
          style={{
            margin: "-50px auto 0",
            textAlign: "center",
            paddingBottom: "100px",
          }}
          className="support-ways-header"
        >
          <h1 className="larger-Header">News and Updates</h1>
        </div>

        <div className="news-container">
          <div className="news-list">
            {news.map((item, index) => (
              <NewsItem key={index + 1} newslogo={newslogo} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
