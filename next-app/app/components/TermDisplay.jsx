"use client"
import React, { useState, useEffect } from 'react';

const TermDisplay = ({ termSetId}) => {
  const [termsList, setTermsList] = useState([]);
  const [currentTermIndex, setCurrentTermIndex] = useState(0);

  var [correct, setCorrect] = useState([]);
  var [passed, setPassed] = useState([]);

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

  const setAsCorrect = (id) => {
    setCorrect(correct => ([...correct, termsList[id]]));
    if (id !== termsList.length) {
      setCurrentTermIndex(id+1);
    } else {
     
    }
  }

  const setAsPassed = (id) => {
    setPassed(passed => ([...passed, termsList[id]]));
    if (id !== termsList.length) {
      setCurrentTermIndex(id+1);
    } else {
     
    }
  }

  return (
    <main>
      {termsList.length == 0 || currentTermIndex < termsList.length ? (
      <>
        <h2>Term Display</h2>
        <div>
          {termsList.length > 0 ? (
            <p>{termsList[currentTermIndex]}</p>
          ) : (
            <p>Loading terms...</p>
          )}
        
            <div>
              <button className='bg-green-500 hover:bg-green-600 px-5 py-2 mr-10 rounded-lg' onClick={() => setAsCorrect(currentTermIndex)}>
                Correct
              </button>
              <button className='bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg' onClick={() => setAsPassed(currentTermIndex)}>
                Pass
              </button>
            </div>
        </div>
      </>
      ) : (
      <>
        <h1>Results</h1>
        <p>Correct: {correct.toString()}</p>
        <p>Need to review: {passed.toString()}</p>
      </>
      )}
    </main>
  );
};

export default TermDisplay;
