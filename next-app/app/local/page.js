'use client'
import React, { useState } from 'react';
import ImageUpload from '@/app/components/ImageUpload/ImageUpload';
import Link from 'next/link';


export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const MAX_IMAGE_HEIGHT = 451;
  const MAX_IMAGE_WIDTH = 601;



  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddToList = () => {
    
    if (inputValue.trim() !== '') {
      setList([...list, inputValue]);
      setInputValue('');
    }

    if (imagePreview) {
      setImageList([...imageList, imagePreview]);
      setImagePreview(null); // Clear the image preview
    } else {
      setImageList([...imageList, ""]);
    }
  };

  const handleAddImageToList = (base64Image) => {
    const img = new Image();
    img.src = base64Image;

    img.onload = () => {
      let newWidth = img.width;
      let newHeight = img.height;
  
      // Check if the image exceeds the maximum dimensions
      if (img.width > MAX_IMAGE_WIDTH || img.height > MAX_IMAGE_HEIGHT) {
        // Calculate new dimensions while maintaining aspect ratio
        const aspectRatio = img.width / img.height;
        if (aspectRatio > 1) {
          // Landscape orientation
          newWidth = MAX_IMAGE_WIDTH;
          newHeight = MAX_IMAGE_WIDTH / aspectRatio;
        } else {
          // Portrait or square orientation
          newHeight = MAX_IMAGE_HEIGHT;
          newWidth = MAX_IMAGE_HEIGHT * aspectRatio;
        }
      }
      
      // Create a canvas to draw the resized image
      const canvas = document.createElement('canvas');
      canvas.width = newWidth;
      canvas.height = newHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, newWidth, newHeight);
      
      // Convert the canvas to base64 encoded image
      const resizedBase64Image = canvas.toDataURL('image/jpeg');
      console.log(canvas.width,canvas.height);
  
      // Set the resized image as the preview
      setImagePreview(resizedBase64Image);
    };

  };

  const playGame = () => {
    // Save data to localStorage
    localStorage.setItem('termsList', JSON.stringify(list));
    localStorage.setItem('imageList', JSON.stringify(imageList));
  };


  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter text"
        />
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <ImageUpload handleAddImageToList={handleAddImageToList} />

      <div style={{ marginTop: '20px' }}>
        {imagePreview && (
          <div>
            <p>Image Preview:</p>
            <img
              src={imagePreview}
              alt="Preview"
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
          </div>
        )}
      </div>

      <ul>
        {imageList.map((base64Image, index) => (
          <li key={index}>
            {base64Image ? (
              <img
                src={base64Image}
                alt={`Image ${index}`}
                style={{ maxWidth: '100%', maxHeight: '200px' }}
              />
            ) : (
              <p>No image for term {index+1}</p>
            )}
          </li>
        ))}
      </ul>
      
      <button
        className='bg-amber-400 hover:bg-amber-500 rounded-3xl xl:p-4 p-3 xl:text-7xl sm:text-6xl text-4xl text-white font-bold text-center mb-2 sm:mr-3 sm:mb-0 shrink-0'
        onClick={handleAddToList}
      >
        Add to List
      </button>
      <button className='bg-amber-400 hover:bg-amber-500 rounded-3xl xl:p-4 p-3 xl:text-7xl sm:text-6xl text-4xl text-white font-bold text-center mb-2 sm:mr-3 sm:mb-0 shrink-0' onClick={playGame}><Link href={{
        pathname:'/local/play'}}>
        play</Link>
      </button>
    </div>
  );
}
