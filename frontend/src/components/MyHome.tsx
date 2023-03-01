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
      .then(data => setWords(data.words.filter((w: any) => w.userID === localStorage.getItem("userID"))))
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

  const handleLogout = () => {
    localStorage.setItem("userID", "");
    localStorage.setItem("loggedIn", "");
    navigate("/");
  }
  
  if (localStorage.getItem("userID") === "") {
    return (
      <div className="no-log-in-container">
      <h1 className="no-login-warning">You need to be logged in to view this page</h1>
      <h3 className="no-login-message">Log in or sign up to continue</h3>
      <button className="no-login-nav-button" onClick={() => navigate("/login")}>Log in page</button>
      <button className="no-login-nav-button" onClick={() => navigate("/signup")}>Sign up page</button>
      </div>
    )
  }
  return (
    <div className="myhome-container">
    <h1 className="myhome-greeting">Create a flashcard below!</h1>
    <div className="create-word-container">
    <button className="language-icon" onClick={() => setLanguage("French")}><GiFrance /></button>
    <button className="language-icon" onClick={() => setLanguage("Spanish")}><GiSpain /></button>
    <button className="language-icon" onClick={() => setLanguage("Italian")}><GiItalia /></button>
    <label className="language-label">English:</label>
    <input type="text" className="input-word" onChange={handleEnglish} />
    <label className="language-label">{`${language}:`}</label>
    <input type="text" className="input-word" onChange={handleTarget} />
    <button  className={`create-word-button create-word-button--${language}`} onClick={saveWord}>Click me</button>
    <button className={practiceMode ? "practice-button" : "practice-button-prompt"} onClick={() => setPracticeMode(!practiceMode)}>{ practiceMode ? <BsGearWideConnected className="gear-icon" /> : "Practice?" }</button>
    <div className="logged-in-as">{`Logged in as:${localStorage.getItem("loggedIn")}`}</div>
    <button className="log-out-button" onClick={handleLogout}>Log out</button>
    </div>
    <Tabs words={words} handleWordDelete={handleWordDelete} practiceMode={practiceMode} />
    </div>
  )
}

export default MyHome;