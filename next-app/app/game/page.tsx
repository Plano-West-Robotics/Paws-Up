"use client"
import React, { useState, useEffect } from 'react';
import wordLists from '../../TEST.json';

export interface WordList {
  id: number;
  grade: number;
  subject: string;
  wordList: Array<string>;
}

const GamePage = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [wordsList, setWordsList] = useState<string[]>([]);

  useEffect(() => {
    const fetchWords = async () => {
      try {

        const response = await fetch('TEST.txt');
        const fileContent: WordList[] = wordLists;

        // Split the content into an array of words using commas as the delimiter
        const wordsList = wordLists.find(element => {return element.id == 2})?.wordList;
        
        if (wordsList == undefined) {
          throw new TypeError('Wordlist expected to have at least one word.');
        }
        
        const trimmedWordsList = wordsList.map((word) => word.trim());

        setWordsList(trimmedWordsList);
        if (wordsList) {
          console.log('List of words:', trimmedWordsList);
        }
      } catch (error) {
        console.error('Error reading file:');
      }
    };

    fetchWords();
  }, []);

  const goToNextWord = () => {
    setCurrentWordIndex((prevIndex) => Math.min(prevIndex + 1, wordsList.length - 1));
  };

  const goToPreviousWord = () => {
    setCurrentWordIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <main>
      <div>
        <h1>GamePage</h1>
        <div>
          <p className='xl:w-2/3 md:w-1/2 w-full xl:text-5xl md:text-3xl text-xl font-bold text-center lg:pb-32 md:pb-10 pb-5'>{wordsList[currentWordIndex] || ''}</p>
        </div>
        <br />
        <button onClick={goToPreviousWord} disabled={currentWordIndex === 0}>
          Previous
        </button>
        <button onClick={goToNextWord} disabled={currentWordIndex === wordsList.length - 1}>
          Next
        </button>
      </div>
    </main>
  );
  
};

export default GamePage;
