import React from 'react';
import { useState, useEffect } from 'react';

const Login = ({ navigate }: {navigate: any}) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(response => response.json())
      .then(data => setUsers(data.users))
      // console.log(users);
  }, []);

  const showUsers = () => {
    console.log(users)
  }

  return (
    <div>
    <input type="text" />
    <input type="password" />
    <button onClick={showUsers}>click me</button>
    </div>
  )
}

export default Login;