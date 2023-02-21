import React from 'react';
import { useState, useEffect } from 'react';

const Signup = ({ navigate }: {navigate: any}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleSubmit = () => {
    navigate("/");
  }

  useEffect(() => {
    console.log(email);
    console.log(password);
  }, [email, password])

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <label>Please enter your email:</label>
    <input type="text" onChange={handleEmailChange}/>
    <label>Please choose a password:</label>
    <input type="password" onChange={handlePasswordChange}/>
    <label>Please enter your password again:</label>
    <input type="password"/>
    <input type="submit"/>
    </form>  
    </div>
  )
}

export default Signup;

