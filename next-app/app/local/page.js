'use client'
import React, { useState } from 'react';
import ImageUpload from '@/app/components/ImageUpload/ImageUpload';
import Link from 'next/link';


export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);

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
    setImagePreview(base64Image);
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
