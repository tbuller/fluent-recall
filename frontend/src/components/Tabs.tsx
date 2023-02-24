import "./styling/Tabs.css";
import React from 'react';
import { useState, useEffect } from 'react';
import Word from "./Word";

const Tabs = ({ words, handleWordDelete }: { words: any, handleWordDelete: (id: string) => void }) => {

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
    <Word words={words} handleWordDelete={handleWordDelete} tab={tab} />
    </div>
    </div>
  )
}

export default Tabs;