import "./styling/Practice.css";
import { IoMdSchool } from 'react-icons/io';
import { VscRunAll } from 'react-icons/vsc';
import React from 'react';
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="practice-card-container">
      <Slider dots={true} infinite={true} speed={500} slidesToShow={3} slidesToScroll={1} className="center">
      {words.map((w: any) => 
        w.language === tab &&        
        <div className="practice-card" key={w._id}>
        <IoMdSchool className="school-icon" />
        <label className="practice-label">Your word in english is:</label>
        <div className="practice-word">{w.english}</div>
        <label className="practice-label">{`So in ${w.language} it would be:`}</label>        
        <input type="text" onChange={(event) => setAnswer(event.target.value)} className="input-answer" />
        <button value={`${w._id}:${w.target}`} onClick={compareAnswer} className="submit-answer">
        <VscRunAll />
        </button>
        <div>More information about this card</div>        
        </div>
    )}
    </Slider>
    </div>
  )
}

export default Practice;