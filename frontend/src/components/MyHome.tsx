import './styling/MyHome.css';
import { GiItalia, GiFrance, GiSpain } from 'react-icons/gi';
import { IoMdSchool } from 'react-icons/io';
import { BsGearWideConnected } from 'react-icons/bs'
import { useEffect, useState } from 'react';
import React from 'react';
import Tabs from "./Tabs";

const MyHome = ({ navigate }: {navigate: any}) => {

  const [language, setLanguage] = useState("French");
  const [englishWord, setEnglishWord] = useState("");
  const [targetWord, setTargetWord] = useState("");
  const [words, setWords] = useState<any[]>([]);
  const [practiceMode, setPracticeMode] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/words")
      .then(response => response.json())
      .then(data => setWords(data.words))
  }, []);

  const handleEnglish = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnglishWord(event.target.value);
  }

  const handleTarget = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTargetWord(event.target.value);
  }

  const showWords = () => {
    console.log(words);
  }

  const saveWord = () => {
    const body = JSON.stringify({
      userID: localStorage.userID,
      language: language,
      english: englishWord,
      target: targetWord,
      past10: []
    })
    fetch("http://localhost:8080/words", {
      method: "post",
      headers: {
      "Content-Type" : "application/json"
      },
      body: body
    })
      .then(response => response.json())
      .then(data => {
        setWords([...words, data.word]);
      })
    
  }

  const handleWordDelete = (deletedId: string) => {
    setWords(words.filter(w => w._id !== deletedId))
  }
  

  return (
    <div className="myhome-container">
    <h1>This is your home page</h1>
    <div className="create-word-container">
    <button className="language-icon" onClick={() => setLanguage("French")}><GiFrance /></button>
    <button className="language-icon" onClick={() => setLanguage("Spanish")}><GiSpain /></button>
    <button className="language-icon" onClick={() => setLanguage("Italian")}><GiItalia /></button>
    <input type="text" className="input-word" onChange={handleEnglish} />
    <input type="text" className="input-word" onChange={handleTarget} />
    <button onClick={saveWord}>Click me</button>
    <button onClick={showWords}>Click me</button>
    <button className="practice-button" onClick={() => setPracticeMode(!practiceMode)}>{ practiceMode ? <BsGearWideConnected className="gear-icon" /> : "Practice?" }</button>
    </div>
    <Tabs words={words} handleWordDelete={handleWordDelete} practiceMode={practiceMode} />
    </div>
  )
}

export default MyHome;