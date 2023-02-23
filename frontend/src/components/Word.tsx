import "./styling/Word.css";
import React from 'react';
import { useState, useEffect } from 'react';

const Word = ({ words }: { words: any }) => {

  // const showWords = () => {
  //   console.log(words);
  // }

  return (
    <div className="word-container">
    <div>
      {words.map((w: any) => 
        <span className="word-card" key={w._id}>{w.english}</span>
        )}
    </div>  
    </div>
  )
}

export default Word;