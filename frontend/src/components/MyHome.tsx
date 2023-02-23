import './MyHome.css';
import { GiItalia, GiFrance, GiSpain } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import React from 'react';

const MyHome = ({ navigate }: {navigate: any}) => {

  const [language, setLanguage] = useState("");
  const [englishWord, setEnglishWord] = useState("");
  const [targetWord, setTargetWord] = useState("");

  const handleEnglish = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnglishWord(event.target.value);
  }

  const handleTarget = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTargetWord(event.target.value);
  }

  const showWords = () => {
    console.log(englishWord);
    console.log(targetWord);
    console.log(language);
  }

  const saveWord = () => {
    fetch("http://localhost:8080/words", {
      method: "post",
      headers: {
      "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        userID: localStorage.userID,
        language: language,
        english: englishWord,
        target: targetWord,
        past10: []
      })
    })
  }
  

  return (
    <div>
    <h1>This is your home page</h1>
    <button className="language-icon" onClick={() => setLanguage("Italian")}><GiItalia /></button>
    <button className="language-icon" onClick={() => setLanguage("French")}><GiFrance /></button>
    <button className="language-icon" onClick={() => setLanguage("Spanish")}><GiSpain /></button>
    <input type="text" className="input-word" onChange={handleEnglish} />
    <input type="text" className="input-word" onChange={handleTarget} />
    <button onClick={saveWord}>Click me</button>
    </div>
  )
}

export default MyHome;