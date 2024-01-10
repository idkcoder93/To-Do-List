import './LoginPageStyle.css';
import './LoginPage.css';
import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons'; 
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import axios from 'axios';

const Button = styled.button`
  background-color: #00cc99;
  width: 300px;
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
      const response = await axios.get(`http://localhost:8080/?username=${values.username}&password=${values.password}`);
      if (response.data === "Invalid credentials or user not found") {
        console.log("Invalid credentials or user not found");
      } else {
        navigate('/main');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };
  
  return (
      <React.StrictMode>
        <div>
          <div className="header">
            <h1>Registration</h1>
          </div>
          <div className="mainbox">
            <div className="title" align="center">
              Create an Account
              <div className="underline"></div>
            </div>
    
            <form className="form1">
              <input className="input" type="text" placeholder="Username" />
              <input className="input" type="email" placeholder="Email" />
    
              {/* Password fields */}
              <input className="input" type="password" placeholder="Password" />
              <input className="input" type="password" placeholder="Password Confirm" />
    
              {/* Button for form submission */}
              <Button className="submit" style={{ marginLeft: "200px" }}>
                Sign In
              </Button>
            </form>
          </div>
    
          {/* Sign-in section */}
          <div className="main">
            <p className="sign" align="center">Sign in</p>
            <form className="form1" onSubmit={handleSubmit}>
              <input className="un" type="text" align="center" placeholder="Username" name='username' onChange={handleInput} />
              <input className="pass" type="password" align="center" placeholder="Password" name='password' onChange={handleInput} />
              <Button className="submit" style={{marginLeft: '155px'}} type='submit'>Sign in</Button>
              <p className="forgot">New User?</p> {/* Provide a valid link for href tag */}
              <p className="forgot">Forgot Password?</p>
            </form>
          </div>
    
          {/* Follow us on social media */}
          <div className="header">
            <h2>Follow us on:</h2>
            <div className="social_media_app">
              {/* Replace the social media URLs with the actual ones */}
              <SocialIcon url="https://twitter.com/" style={{marginRight: '10px'}}/>
              <SocialIcon url="https://facebook.com/" style={{marginRight: '10px'}}/>
              <SocialIcon url="https://instagram.com/" style={{marginRight: '10px'}}/>
              <SocialIcon url="https://github.com/" style={{marginRight: '10px'}}/> 
            </div>
          </div>
        </div>
      </React.StrictMode>
    );
}

export default Registration;
