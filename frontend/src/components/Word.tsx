import "./styling/Word.css";
import React from 'react';
import { useState, useEffect } from 'react';

const Word = ({ words, handleWordDelete }: { words: any, handleWordDelete: (id: string) => void }) => {

  // const [deletedId, setDeletedId] = useState("")

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
  }

  return (
    <div className="word-container">
    <div>
      {words.map((w: any) => 
        <span className="word-card" key={w._id}>
          {w.english}
        <span className="delete-card-container">
        <button className="delete-card" value={w._id} onClick={deleteWord}>X</button>
        </span>  
        </span>
        )}
    </div>  
    </div>
  )
}

export default Word;