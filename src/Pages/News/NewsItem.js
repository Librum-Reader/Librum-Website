import { Link } from "react-router-dom";

const NewsItem = ({ bg, newslogo, item, index }) => {
  const date = new Date(item.creationDate);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
    "November", "December"
  ];

  return (
    <div
      key={index + 1}
      className="news-unit"
    >
      <div className="news-image">
        <img src={newslogo} alt="news-logo" />
      </div>
      <div className="news-text">
        <div>
          <h2>{item.title}</h2>
          <small

            style={
              bg === "light"
                ? { color: "crimson" }
                : { color: "crimson" }
            }
          >
            {`${monthNames[month]} ${day} ${year}`}
          </small>
          <p
            style={
              bg === "light"
                ? { color: "var(--color-primary0)" }
                : {
                  color: "white",
                }
            }
          >
            {item.introduction}
          </p>
        </div>
        <Link to={"/news/" + item.id}>
          <button className="btn btn-secondary">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
