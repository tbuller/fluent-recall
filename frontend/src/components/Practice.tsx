import "./styling/Practice.css";
import { IoMdSchool } from 'react-icons/io';
import { VscRunAll } from 'react-icons/vsc';
import { TiTick } from 'react-icons/ti';
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
      setResult("unattempted");
      setShowInfo(false);
      sliderRef.current?.slickNext();
    }, 1500);
  }



  return (
    <div className={`practice-card-container practice-card-container--${tab}`}>
      <Slider dots={false} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1} className="center" ref={sliderRef}>
      {words.map((w: any) => 
        w.language === tab &&
        <div className="practice-card" key={w._id}>
        <IoMdSchool className="school-icon" />
        <label className="practice-label">Your word in english is:</label>
        <div className="practice-word">{w.english}</div>
        <label className="practice-prompt">{`So in ${w.language} it would be:`}</label>        
        <input type="text" onChange={(event) => setAnswer(event.target.value)} className="input-answer" />
        <button value={`${w._id}:${w.target}`} onClick={compareAnswer} className="submit-answer">
        <VscRunAll />
        </button>
        <br></br>
        <label className="pass-fail-label">Recent attempts:</label> 
        <span>  
        {w.past10.slice(-10).map((x:any, index:any) => (
        <span key={index} className={`rectangle-${x}`}>[]</span>
        ))}
        {result === "unattempted" ? <span className="rectangle-unattempted">[]</span> : <span className={`rectangle-${result}`} key={Math.random()}>[]</span>}
        </span>
        <div className={`practice-result-${result}`}>{result === "Pass" ? <TiTick /> : <ImCross />}{w.target}</div>
        <div onClick={() => setShowInfo(!showInfo)}>{showInfo ? <div className="more-info-container"><AiFillMinusCircle className="more-info-button" /> <div className="more-info-text">Word Info</div></div> : <div className="more-info-container"><AiFillPlusCircle className="more-info-button" /> <div className="more-info-text">Word Info</div></div>}</div> 
        {showInfo && <InfoCard date={w.createdAt} track={w.past10} />}       
        </div>
    )}
    </Slider>
    </div>
  )
}

export default Practice;