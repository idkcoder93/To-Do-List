import './App.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons'; 
import styled from 'styled-components';

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


function App() {
  return (
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
    <div className='button-layout'>
      <Button>Sign Up</Button>
      <Button>Log In</Button>
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
  );
}

export default App;