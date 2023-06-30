import React, { useState } from 'react';
import template from './template';
import axios from 'axios';
import './Blog.css';

const Renderer = () => {
  const [htmlCode, setHtmlCode] = useState(template);
  const handleHtmlChange = (event) => {
    setHtmlCode(event.target.value);
  }

  const createPost = (e) => {
    e.preventDefault();
    console.log("create");
    const blogUrl = "https://librum-dev.azurewebsites.net/api/blog";
    const contentUrl = "https://librum-dev.azurewebsites.net/api/blog/content/eb02d931-df3d-4e86-9dcb-08db7983f63b";
    const blogData = {
      Title: "Some Title Here",
      Introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
    const contentData = new FormData();
    contentData.append("content", htmlCode);

    const jsonConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const multidataConfig = {
      headers: {
        'Content-Disposition': 'form-data; name="file"; filename="file.txt"',
        'Content-Type': 'multipart/form-data',
      },
    }
    axios.post(blogUrl, blogData, jsonConfig)
      .then(() => {
        axios.post(contentUrl, contentData, multidataConfig)
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className='outer'>
      <div className='blog'>
        <div className='html'>
          <h2 className='heading'>Write post</h2>
          <textarea
            className='textarea-class'
            value={htmlCode}
            onChange={handleHtmlChange}
            placeholder='Write simple html code here start with a <h1>Title</h1>'
          />
        </div>
        <div className='preview'>
          <h2 className='heading'>Preview</h2>
          <div
            className='render'
            dangerouslySetInnerHTML={{ __html: htmlCode }}
          />
        </div>
      </div>
      <div className='button-container'>
        <button
          className='btn'
          onClick={(e) => createPost(e)}
        >
          Create Post
        </button>
      </div>
    </form>
  );
}

export default Renderer;
