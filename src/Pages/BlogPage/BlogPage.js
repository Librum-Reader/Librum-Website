import "./BlogPage.css"
import Renderer from "../../Components/Blog/Blog";

const BlogPage = () => {
  return (
    <div className="main-container">
      <h1 className="title">CREATE A POST</h1>
      <Renderer />
    </div>
  );
};

export { BlogPage };
