import React from 'react';
import { useState, useEffect } from 'react';

const Practice = ({ words, tab }: { words: any, tab: string }) => {

  const [answer, setAnswer] = useState("");
  // const [correctAnswer, setCorrectAnswer] = useState("");

  const compareAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    const correctAnswer = event.currentTarget.value;
    answer === correctAnswer ? console.log("correct") : console.log("try again");
  }

  return (
    <div>
      {words.map((w: any) => 
        w.language === tab &&
        <div className="practice-card" key={w._id}>
        <div>{w.english}</div>
        <input type="text" onChange={(event) => setAnswer(event.target.value)} />
        <button value={w.target} onClick={compareAnswer}>
        Submit and Compare
        </button>
        </div>
    )}
    </div>
  )
}

export default Practice;