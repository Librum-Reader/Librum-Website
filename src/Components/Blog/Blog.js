import React, { useState } from 'react';
import template from './template';
import './Blog.css';

const Renderer = () => {
  const [htmlCode, setHtmlCode] = useState(template);
  // const [postTemplate, setPostTemplate] = useState(template);

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
      <div className='button-container'>
        <button className='btn'>Create Post</button>
      </div>
    </div>
  );
}

export default Renderer;
