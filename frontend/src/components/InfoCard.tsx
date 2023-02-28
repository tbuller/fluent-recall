import React from 'react';
import { useEffect } from 'react'
import { RxSpeakerLoud } from 'react-icons/rx';

const InfoCard = (w : any) => {

  const talk = () => {
    const utterance = new SpeechSynthesisUtterance(w.w.target);
    utterance.rate = 1;
    if (w.w.language === "French") {
      utterance.lang = "fr"
    } else if (w.w.language === "Spanish") {
      utterance.lang = "es"
    } else {
      utterance.lang = "it"
    }
    speechSynthesis.speak(utterance);
  }

  return (
    <div className="info-card-container">
    <span className="answer-info-container">
    <div className="answer-info">{w.w.target}</div>
    <button onClick={talk} className="talk-button"><RxSpeakerLoud /></button>
    </span>
    <div className="date-info">{`- You added this word on ${new Date(w.w.createdAt).toDateString()}`}</div>
    <div className="success-info">{`- Success: ${(w.w.past10).filter((x: any) => x === "Pass").length}/${(w.w.past10).length} correct attempts (${Math.round(((w.w.past10).filter((x: any) => x === "Pass").length / (w.w.past10).length) * 100)}%)`}</div>
    </div>
  )
}

export default InfoCard;