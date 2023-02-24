import "./styling/Tabs.css";
import React from 'react';
import { useState, useEffect } from 'react';
import Word from "./Word";
import Practice from "./Practice";

const Tabs = ({ words, handleWordDelete, practiceMode }: { words: any, handleWordDelete: (id: string) => void, practiceMode: boolean }) => {

  const [tab, setTab] = useState("French");

  const showTab = () => {
    console.log(tab);
  }

  return (
    <div className="tabs-cards-container">
    <div className="tab-buttons-container">
    <button className={`tab-button ${tab === "French" ? 'active' : ''}`} onClick={() => setTab("French")}>French</button>
    <button className={`tab-button ${tab === "Spanish" ? 'active' : ''}`} onClick={() => setTab("Spanish")}>Spanish</button>
    <button className={`tab-button ${tab === "Italian" ? 'active' : ''}`} onClick={() => setTab("Italian")}>Italian</button>
    </div>
    <div>
    {practiceMode ? <Practice /> : <Word words={words} handleWordDelete={handleWordDelete} tab={tab} />}    
    </div>
    </div>
  )
}

export default Tabs;