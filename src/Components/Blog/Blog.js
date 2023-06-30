import React, { useState } from 'react';
import template from './template';
import axios from 'axios';
import './Blog.css';

const Renderer = () => {
  const [htmlCode, setHtmlCode] = useState(template);
  const handleHtmlChange = (event) => {
    setHtmlCode(event.target.value);
  }

  const createPost = (e, htmlCode) => {
    e.preventDefault();
    const htmlBlob = new Blob([htmlCode], { type: 'text/html' });
    const blogUrl = "https://librum-dev.azurewebsites.net/api/blog";
    const contentUrl = (id) => `https://librum-dev.azurewebsites.net/api/blog/content/${id}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const blogData = {
      Title: 'Test Blog',
      Introduction: 'Test Introduction',
    };
    const formData = new FormData();
    formData.append('file', htmlBlob, 'file.txt');
    const multidataConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    axios.post(blogUrl, blogData, config)
      .then((res) => {
        axios.post(contentUrl(res.data.id), formData, multidataConfig)
          .catch((err) => console.log(err));
      }).catch((err) => console.log(err));
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
          onClick={(e) => createPost(e, htmlCode)}
        >
          Create Post
        </button>
      </div>
    </form>
  );
}

export default Renderer;
