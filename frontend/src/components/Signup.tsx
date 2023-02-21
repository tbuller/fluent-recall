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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch("/users", {
      method: "post",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({ email: email, password: password })
    }).then((response) => {
      if (response.status === 201) {
        navigate("/myhome");
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
    <div>
    <form onSubmit={handleSubmit}>
    <label>Please enter your email:</label>
    <input type="text" onChange={handleEmailChange}/>
    <label>Please choose a password:</label>
    <input type="password" onChange={handlePasswordChange}/>
    <button type="submit">submit</button>
    </form>  
    </div>
  )
}

export default Signup;

