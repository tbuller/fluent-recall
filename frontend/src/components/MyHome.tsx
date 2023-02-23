import './MyHome.css';
import { GiItalia, GiFrance, GiSpain } from 'react-icons/gi';
import React from 'react';

const MyHome = ({ navigate }: {navigate: any}) => {
  return (
    <div>
    <h1>This is your home page</h1>
    <button className="language-icon"><GiItalia /></button>
    <button className="language-icon"><GiFrance /></button>
    <button className="language-icon"><GiSpain /></button>
    <input type="text" className="input-word" />
    <input type="text" className="input-word" />
    </div>
  )
}

export default MyHome;