"use client";
import React from 'react';
import { Suspense } from 'react';
import TermDisplay from '../components/TermDisplay';
import { useState, useEffect } from 'react';

// change the 1 with the id of the selected list but should be good for the purposes of demonstration

const GamePage = () => {
    return (
      <main>
          <>
            <h1>Game Page</h1>      
            <TermDisplay termSetId={1}/> 
          </>
      </main>
    );
};

export default GamePage;
