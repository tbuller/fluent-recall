import "./styling/Practice.css";
import { IoMdSchool } from 'react-icons/io';
import { VscRunAll } from 'react-icons/vsc';
import { VscPass } from 'react-icons/vsc';
import { ImCross } from 'react-icons/im';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import React from 'react';
import InfoCard from "./InfoCard";
import { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Practice = ({ words, tab }: { words: any, tab: string }) => {

  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("unattempted")
  const [showInfo, setShowInfo] = useState(false);
  const sliderRef = useRef<Slider>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const compareAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    const [attemptedId, correctAnswer] = event.currentTarget.value.split(":");
    const isCorrect = answer === correctAnswer ? "Pass" : "Fail";
    isCorrect === "Pass" ? setResult("Pass") : setResult("Fail"); 
    fetch("http://localhost:8080/words", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ attemptedId: attemptedId, isCorrect: isCorrect })
    })
      .then(response => response.json())
      .then(data => console.log(data))
    setTimeout(() => {
      if (inputRef.current != null) {
        inputRef.current.value = "";
      }
      setAnswer("");
      setResult("unattempted");
      setShowInfo(false);
      sliderRef.current?.slickNext();
    }, 1500);
  }

  // const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter") {
  //     buttonRef.current?.click();
  //   }
  // };

  return (
    <div className={`practice-card-container practice-card-container--${tab}`}>
      <Slider dots={false} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1} className="center" ref={sliderRef}>
      {words.map((w: any) => {
        const previousTries = w.past10;
        let backgroundColor = "background-color:grey;";
        
        const numPasses = previousTries.filter((tryResult: any) => tryResult === "Pass").length;
        const totalTries = previousTries.length;
    
        if (totalTries < 5) {
          backgroundColor = "grey";
        } else {
          const passRate = numPasses / totalTries;
    
          if (passRate >= 0.7) {
            backgroundColor = "green";
          } else if (passRate >= 0.5 && passRate < 0.7) {
            backgroundColor = "amber";
          } else {
            backgroundColor = "red";
          }
        }
        if (w.language === tab) { 
        return (  
        <div className={`practice-card practice-card-${backgroundColor}`} key={w._id}>
        <IoMdSchool className="school-icon" />
        {/* <label className="practice-label">Your word in english is:</label> */}
        <p className="practice-word">{w.english}</p>
        <label className="practice-prompt">{`In ${w.language} is:`}</label>        
        <input type="text" ref={inputRef} onChange={(event) => setAnswer(event.target.value)} value={answer} className="input-answer"  />
        <button value={`${w._id}:${w.target}`} onClick={compareAnswer} className="submit-answer">
        <VscRunAll />
        </button>
        <br></br>
        <span className={`practice-result-${result}`}>{result === "Pass" ? <VscPass className="pass-icon" /> : "x"}<p className="pass-fail-answer">{`${w.target}`}</p></span>
        <label className="pass-fail-label">Recent attempts:</label> 
        <span>  
        {w.past10.slice(-10).map((x:any, index:any) => (
        <span key={index} className={`rectangle-${x}`}>[]</span>
        ))}
        {result === "unattempted" ? <span className="rectangle-unattempted">[]</span> : <span className={`rectangle-${result}`} key={Math.random()}>[]</span>}
        </span>
        <div onClick={() => setShowInfo(!showInfo)}>{showInfo ? <div className="more-info-container"><AiFillMinusCircle className="more-info-button" /> <div className="more-info-text">Word Info (includes spoilers)</div></div> : <div className="more-info-container"><AiFillPlusCircle className="more-info-button" /> <div className="more-info-text">Word Info (includes spoilers)</div></div>}</div> 
        {showInfo && <InfoCard w={w} />}       
        </div>
    )}
    else {
      return null;
    }})}
    </Slider>
    </div>
  )
}

export default Practice;