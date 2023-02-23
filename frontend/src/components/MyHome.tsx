import { GiItalia, GiFrance, GiSpain } from 'react-icons/gi';
import React from 'react';

const MyHome = ({ navigate }: {navigate: any}) => {
  return (
    <div>
    <h1>This is your home page</h1>
    <button><GiItalia /></button>
    <button><GiFrance /></button>
    <button><GiSpain /></button>
    </div>
  )
}

export default MyHome;