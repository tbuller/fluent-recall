import React from 'react';
import { useState, useEffect } from 'react';
import "./styling/Signup.css";

const Signup = ({ navigate }: {navigate: any}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch("http://localhost:8080/users", {
      method: "post",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({ email: email, password: password })
    }).then((response) => {
      if (response.status === 201) {
        navigate("/login");
      } else {
        console.log(response);
        navigate("/signup");
      }
    });
  }

  useEffect(() => {
    console.log(email);
    console.log(password);
  }, [email, password])

  return (
    <div className="signup-form-container">
    <form className="signup-form" onSubmit={handleSubmit}>
    <label className="prompt-label">Please enter your email:</label>
    <input className="input-field" type="text" onChange={handleEmailChange}/>
    <label className="prompt-label">Please choose a password:</label>
    <input className="input-field" type="password" onChange={handlePasswordChange}/>
    <button className="submit-button" type="submit">Create account</button>
    </form>  
    </div>
  )
}

export default Signup;

