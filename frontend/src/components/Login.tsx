import React from 'react';
import { useState, useEffect } from 'react';
import "./styling/Login.css"

const Login = ({ navigate }: {navigate: any}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<any[]>([]);

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(response => response.json())
      .then(data => setUsers(data.users))
      // console.log(users);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const matchesUser = users.find(u => u.email === email && u.password === password);
    if (matchesUser) {
      localStorage.setItem("userID", matchesUser._id)
      navigate("/myhome");
    } else {
      console.log("not today son");
    }
  }

  return (
    <div className="login-form-container">
    <form className="login-form" onSubmit={handleSubmit}>
    <label className="prompt-label">Email:</label>    
    <input className="input-field" type="text" onChange={handleEmail} />
    <label className="prompt-label">Password:</label>
    <input className="input-field" type="password" onChange={handlePassword} />
    <button className="submit-button" type="submit">Log in</button>
    </form>
    </div>
  )
}

export default Login;