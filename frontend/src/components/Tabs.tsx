import "./styling/Tabs.css";
import React from 'react';
import { useState, useEffect } from 'react';
import Word from "./Word";

const Tabs = ({ words, handleWordDelete }: { words: any, handleWordDelete: (id: string) => void }) => {

  const [tab, setTab] = useState(1);

  const showTab = () => {
    console.log(tab);
  }

  return (
    <div className="tabs-cards-container">
    <div className="tab-buttons-container">
    <button className={`tab-button ${tab === 1 ? 'active' : ''}`} onClick={() => setTab(1)}>French</button>
    <button className={`tab-button ${tab === 2 ? 'active' : ''}`} onClick={() => setTab(2)}>Spanish</button>
    <button className={`tab-button ${tab === 3 ? 'active' : ''}`} onClick={() => setTab(3)}>Italian</button>
    </div>
    <div>
    <Word words={words} handleWordDelete={handleWordDelete} />
    </div>
    </div>
  )
}

export default Tabs;