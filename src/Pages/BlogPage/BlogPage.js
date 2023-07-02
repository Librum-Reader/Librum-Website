import "./BlogPage.css"
import Renderer from "../../Components/Blog/Blog";
import ImageUpload from "../../Components/Blog/ImageUpload";

const BlogPage = () => {
  return (
    <div className="main-container">
      <h1 className="title">CREATE A POST</h1>
      <ImageUpload />
      <Renderer />
    </div>
  );
};

export { BlogPage };
