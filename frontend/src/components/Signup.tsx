import React from 'react';
import { useState, useEffect } from 'react';

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    console.log(email);
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    console.log(password);
  }

  return (
    <div>
    <label>Please enter your email:</label>
    <input type="text" onChange={handleEmailChange}/>
    <label>Please choose a password:</label>
    <input type="password" onChange={handlePasswordChange}/>
    <label>Please enter your password again:</label>
    <input type="password"/>
    </div>
  )
}

export default Signup;

