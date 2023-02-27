import "./styling/Word.css";
import React from 'react';
import { useState, useEffect } from 'react';

const Word = ({ words, handleWordDelete, tab }: { words: any, handleWordDelete: (id: string) => void, tab: string }) => {

  const deleteWord = (event: React.MouseEvent<HTMLButtonElement>) => {
    const deletedId = event.currentTarget.value;
    fetch("http://localhost:8080/words", {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ deletedId: deletedId })
    })
      .then(response => response.json())
      .then(data => {
        handleWordDelete(deletedId);
      })  
    console.log(tab);  
  }

  return (
    <div className="word-container">
    <div>
    {words.map((w: any) => {
    const previousTries = w.past10;
    let backgroundColor = "";
    
    const numPasses = previousTries.filter((tryResult: any) => tryResult === "Pass").length;
    const totalTries = previousTries.length;

    if (totalTries < 5) {
      backgroundColor = "grey";
    } else {
      const passRate = numPasses / totalTries;

      if (passRate >= 0.7) {
        backgroundColor = "green";
      } else if (passRate >= 0.5 && passRate < 0.7) {
        backgroundColor = "#FFBF00";
      } else {
        backgroundColor = "red";
      }
    }
    if (w.language === tab) {
      return (
        <span className="word-card" key={w._id} style={{ backgroundColor }}>
          {w.english}
        <span className="delete-card-container">
        <button className="delete-card" value={w._id} onClick={deleteWord}>
          X
        </button>
        </span>
        </span>
      );
    } else {
      return null;
    }
  })}
    </div>  
    </div>
  )
}

export default Word;