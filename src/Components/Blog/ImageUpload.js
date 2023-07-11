import React, { useState } from 'react';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);


  const handleUpload = () => {
    // sent to api
    console.log('Image uploaded:', selectedImage);
  };

  return (
    <div className='form'>
      <form className='t-introduction'>
        <div className='formtitle'>
          <label htmlFor="title">Title</label>
          <input type="text" placeholder="Add a title..." />
        </div>
        <div className='formtitle'>
          <label htmlFor="introduction">Introduction</label>
          <input type="textarea" placeholder="Add a brief introduction" />
        </div>
      </form>
      <input
        className='upload'
        type="file"
        multiple="multiple"
        accept="image/jpeg, image/png, image/jpg"
        onChange={handleImageUpload}
      />
    </div >
  );
};

export default ImageUpload;
