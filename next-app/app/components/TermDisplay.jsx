// components/TermDisplay.js
import React, { useState, useEffect } from 'react';
import styles from './TermDisplay.module.css'; // Import a CSS module for styling

const TermDisplay = () => {
  const [termsList, setTermsList] = useState([]);
  const [currentTermIndex, setCurrentTermIndex] = useState(0);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await fetch('/api/getTerms');
        const { terms } = await response.json();
        setTermsList(terms);
      } catch (error) {
        console.error('Error fetching terms:', error);
      }
    };

    fetchTerms();
  }, []);

  const goToNextTerm = () => {
    setCurrentTermIndex((prevIndex) => Math.min(prevIndex + 1, termsList.length - 1));
  };

  const goToPreviousTerm = () => {
    setCurrentTermIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className={styles.termDisplay}>
      <h2>Term Display</h2>
      {termsList.length > 0 && (
        <div className={styles.termContainer}>
          <p className={styles.currentTerm}>{termsList[currentTermIndex]}</p>
          <div className={styles.navigationButtons}>
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
