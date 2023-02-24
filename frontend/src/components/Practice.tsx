import React from 'react';
import { useState, useEffect } from 'react';

const Practice = ({ words, tab }: { words: any, tab: string }) => {

  const [answer, setAnswer] = useState("");
  // const [isCorrect, setIsCorrect] = useState("");

  const compareAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    const [attemptedId, correctAnswer] = event.currentTarget.value.split(":");
    const isCorrect = answer === correctAnswer ? "Pass" : "Fail";
    fetch("http://localhost:8080/words", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ attemptedId: attemptedId, isCorrect: isCorrect })
    })
      .then(response => response.json())
      .then(data => console.log(data))
    // console.log(attemptedId);
    // console.log(correctAnswer);
  }

  return (
    <div>
      {words.map((w: any) => 
        w.language === tab &&
        <div className="practice-card" key={w._id}>
        <div>{w.english}</div>
        <input type="text" onChange={(event) => setAnswer(event.target.value)} />
        <button value={`${w._id}:${w.target}`} onClick={compareAnswer}>
        Submit and Compare
        </button>
        </div>
    )}
    </div>
  )
}

export default Practice;