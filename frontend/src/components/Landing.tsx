import React from 'react';
import "./styling/Landing.css"

const Landing = ({ navigate }: {navigate: any}) => {

  const navigateLogin = () => {
    navigate('/login');
  }

  const navigateSignup = () => {
    navigate('/signup');
  }

  return (
    <div className="landing-container">
    <h1 className="landing-greeting">Welcome to Fluent Recall!</h1>
    <h3 className="landing-prompt">Create an account or log in if you are already registerd with us</h3>
    <button className="nav-button" onClick={navigateLogin}>Log in</button>
    <button className="nav-button" onClick={navigateSignup}>Sign up</button>
    </div>
  )
}

export default Landing;