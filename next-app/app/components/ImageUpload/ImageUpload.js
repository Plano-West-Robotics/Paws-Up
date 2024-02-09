import React, { useState } from 'react';

const ImageUpload = ({ handleAddImageToList, handleClearPreview }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    handleImageUpload(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileInputChange = (e) => {
    handleImageUpload(e.target.files[0]);
  };

  const handleImageUpload = (file) => {
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const base64Image = reader.result;
        handleAddImageToList(base64Image);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          border: '2px dashed #ccc',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >
        Drop or click to upload an image
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            style={{ maxWidth: '100%', maxHeight: '200px', margin: '10px 0' }}
          />
        )}
      </div>
      <input type="file" onChange={handleFileInputChange} />
    </div>
  );
};

export default ImageUpload;
