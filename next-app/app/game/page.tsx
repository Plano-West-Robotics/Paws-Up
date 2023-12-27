import React from 'react';
import TermDisplay from '../components/TermDisplay';

// change the 1 with the id of the selected list but should be good for the purposes of demonstration

const YourPage = () => {
  return (
    <div>
      <h1>Your Page</h1>
      <TermDisplay termSetId = {1} /> 
    </div>
  );
};

export default YourPage;
