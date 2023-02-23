import React from 'react';
import { useState, useEffect } from 'react';

const Tabs = () => {

  const [tab, setTab] = useState(1);

  const showTab= () => {
    console.log(tab);
  }

  return (
    <div className="tab-buttons">
    <button onClick={() => setTab(1)}>French</button>
    <button onClick={() => setTab(2)}>Spanish</button>
    <button onClick={() => setTab(3)}>Italian</button>
    </div>
  )
}

export default Tabs;