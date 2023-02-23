import React from 'react';
import { useState, useEffect } from 'react';

const Word = ({ words }: { words: any }) => {

  const showWords = () => {
    console.log(words);
  }

  return (
    <div className="word-container">
    <div className="word-container">Hello world</div>
    <button onClick={showWords}>click</button>
    </div>
  )
}

export default Word;