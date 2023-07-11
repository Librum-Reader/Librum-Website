import React, { useEffect, useState } from 'react';
import template from './template';
import axios from 'axios';
import './Blog.css';

const Renderer = () => {
  const [htmlCode, setHtmlCode] = useState(template);
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState('');
  const [intro, setIntro] = useState('');
  const handleHtmlChange = (event) => {
    setHtmlCode(event.target.value);
  };
  const regex1 = /\{\{image1\}\}/;
  const regex2 = /\{\{image2\}\}/;
  // const regexvalues = [regex1, regex2];
  const handleImageUpload = (event) => {
    setSelectedImage(event.target.files);

    // for (let i = 0; i < files.length; i++) {
    //   imageUrls.push(URL.createObjectURL(files[i]));
    // }

    // for (let i = 0; i < imageUrls.length; i++) {
    //   setHtmlCode((prev) => prev.replace(regexvalues[i], imageUrls[i]));
    // }
  };


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
        axios.post(contentUrl(res.data), formData, multidataConfig)
          .catch((err) => console.log(err));
      }).catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log("change");
  }, [htmlCode]);

  const createCover = (e) => {
    e.preventDefault();
    const coverUrl = "https://librum-dev.azurewebsites.net/api/blog/cover/f6fd141c-47de-43a4-6dec-08db7998709d";
    const imageData = new FormData();
    imageData.append('cover_image', selectedImage[0]);
    const multidataConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    axios.post(coverUrl, imageData, multidataConfig).then((res) => {
      console.log(res);
    }
    ).catch((err) => console.log(err));
  };

  // console.log(selectedImage);

  return (
    <>
      <div className='form'>
        <form className='t-introduction'>
          <div className='formtitle'>
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="Add a title..." onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className='formtitle'>
            <label htmlFor="introduction">Introduction</label>
            <input type="textarea" placeholder="Add a brief introduction" onChange={(e) => setIntro(e.target.value)} />
          </div>
        </form>
        <input
          className='upload'
          type="file"
          multiple="multiple"
          accept="image/jpeg, image/png, image/jpg"
          onChange={(e) => {
            handleImageUpload(e);
          }}
        />
        <button
          onClick={createCover}
        >
          Test Cover
        </button>
      </div>
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
            {/* <div className='render'>
              {imageUrls.map((url, index) => (
                <img src={url} key={index} alt="blog" />
              ))}

            </div> */}
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
    </>
  );
}

export default Renderer;
