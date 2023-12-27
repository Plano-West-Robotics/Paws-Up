"use client"
import React, { useState, useEffect } from 'react';

const TermDisplay = ({ termSetId }) => {
  const [termsList, setTermsList] = useState([]);
  const [currentTermIndex, setCurrentTermIndex] = useState(0);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await fetch(`/api/getTerms/${termSetId}`);
        const { terms } = await response.json();
        setTermsList(terms);
      } catch (error) {
        console.error('Error fetching terms:', error);
      }
    };

    fetchTerms();
  }, [termSetId]);

  const goToNextTerm = () => {
    setCurrentTermIndex((prevIndex) => Math.min(prevIndex + 1, termsList.length - 1));
  };

  const goToPreviousTerm = () => {
    setCurrentTermIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div>
      <h2>Term Display</h2>
      {termsList.length > 0 && (
        <div>
          <p>{termsList[currentTermIndex]}</p>
          <div>
            <button onClick={goToPreviousTerm} disabled={currentTermIndex === 0}>
              Previous
            </button>
            <button onClick={goToNextTerm} disabled={currentTermIndex === termsList.length - 1}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermDisplay;
