import React, { useState } from 'react';
import './Blog.css';
// import testImage from "./test.jpg";

const Renderer = () => {
  const [htmlCode, setHtmlCode] = useState('');

  const handleHtmlChange = (event) => {
    setHtmlCode(event.target.value);
  }

  return (
    <div className='outer'>
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
      <button className='btn'>Create Post</button>
    </div>
  );
}

export default Renderer;
