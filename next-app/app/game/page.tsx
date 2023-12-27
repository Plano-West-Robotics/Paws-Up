// Your parent component or page
import React from 'react';
import TermDisplay from '../components/TermDisplay';

const YourPage = () => {
  return (
    <div>
      <h1>Your Page</h1>
      <TermDisplay termSetId = {1} /> 
    </div>
  );
};

export default YourPage;
