import React from 'react';
import { useEffect } from 'react'

const InfoCard = (w : any) => {

  const talk = async () => {
    const utterance = new SpeechSynthesisUtterance(w.w.target);
    utterance.rate = 1;
    utterance.lang = 'fr'
    speechSynthesis.speak(utterance);
  }

  return (
    <div className="info-card-container">
    <div className="phnetic-info"></div>
    <div className="date-info">{`- You added this word on ${new Date(w.w.createdAt).toDateString()}`}</div>
    <div onClick={talk} className="success-info">{`- Success:${(w.w.past10).filter((x: any) => x === "Pass").length}/${(w.w.past10).length} correct attempts`}</div>
    </div>
  )
}

export default InfoCard;