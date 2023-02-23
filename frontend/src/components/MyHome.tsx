import './MyHome.css';
import { GiItalia, GiFrance, GiSpain } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import React from 'react';

const MyHome = ({ navigate }: {navigate: any}) => {

  const [language, setLanguage] = useState("");
  const [englishWord, setEnglishWord] = useState("");
  const [targetWord, setTargetWord] = useState("");
  const [words, setWords] = useState<any[]>([]);

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
  

  return (
    <div>
    <h1>This is your home page</h1>
    <button className="language-icon" onClick={() => setLanguage("Italian")}><GiItalia /></button>
    <button className="language-icon" onClick={() => setLanguage("French")}><GiFrance /></button>
    <button className="language-icon" onClick={() => setLanguage("Spanish")}><GiSpain /></button>
    <input type="text" className="input-word" onChange={handleEnglish} />
    <input type="text" className="input-word" onChange={handleTarget} />
    <button onClick={saveWord}>Click me</button>
    <button onClick={showWords}>Click me</button>
    </div>
  )
}

export default MyHome;