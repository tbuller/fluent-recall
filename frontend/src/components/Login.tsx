import React from 'react';
import { useState, useEffect } from 'react';

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
    const matchesUser = users.map(u => u.email === email && u.password === password);
    if (matchesUser.includes(true)) {
      navigate("/myhome");
    } else {
      console.log("not today son");
    }
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>  
    <input type="text" onChange={handleEmail} />
    <input type="password" onChange={handlePassword} />
    <button type="submit">submit</button>
    </form>
    </div>
  )
}

export default Login;