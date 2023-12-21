import './registrationStyle.css';
import './signup.css';
import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons'; 
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import axios from 'axios';

const Button = styled.button `
  background-color: #00cc99;
  color: white;
  padding: 15px 20px;
  margin: 10px 10px;
  border-radius: 5px;
  border-style: none;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgrey;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #03dba5;
  }
`
const Registration = () => {

  const [values, setValues] = useState({
    username:'',
    password:''
  })

  const navigate = useNavigate();
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: event.target.value}))

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/?username=${values.username}&password=${values.password}`);
      console.log(response.data); // Log the response received from the server
      navigate('/main');
    } catch (error) {
      console.error('Error occurred:', error);
    }
   };
  
  return (
  <React.StrictMode>
  <div>
    <div className="header">
      <h1>Welcome to Taskers</h1>
    </div>
    <div className = "container">
      <div className="gradient-border">
        <h2>Easy to use</h2>
        <div className= "text">
          <p>Optimized for your needs as we know you are busy
            trying to plan your day. So don't worry about that and
            let us do that for you.</p>
        </div>
      </div>
      <div className="gradient-border">
        <h2>Accessible</h2>
        <div className="text">
          <p>We have dictation mode that can help you plan your
            day. We praise ourselve with performance and 
            accessibility which will make your day easier.</p>
        </div>
      </div>
    </div>
    <div className="main">
      <p className="sign" align="center">Sign in</p>
      <form className="form1" onSubmit={handleSubmit}>
        <input className="un " type="text" align="center" placeholder="Username" name='username'
        onChange={handleInput}/>
        <input className="pass" type="password" align="center" placeholder="Password" name='password'
        onChange={handleInput} />
        <Button className="submit" style={{marginLeft: '155px'}} type='submit'>sign in</Button>
        <p className="forgot">New User?</p> 
        {/* ^^^^ will need to provide valid link for the href tag*/}
        <p className="forgot"> Forgot Password?</p>
      </form>
    </div>
    <div className="header">
      <h2>Follow us on:</h2>
      <div className="social_media_app">
        <SocialIcon url="https://twitter.com/" style={{marginRight: '10px'}}/>
        <SocialIcon url="https://facebook.com/" style={{marginRight: '10px'}}/>
        <SocialIcon url="https://instagram.com/" style={{marginRight: '10px'}}/>
        <SocialIcon url="https://github.com/" style={{marginRight: '10px'}}/> 
      </div>
    </div>
  </div>
  </ React.StrictMode>
  );
}

export default Registration;