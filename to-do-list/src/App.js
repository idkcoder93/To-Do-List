import './App.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons'; // Updated import statement
import AlexProfilePic from './images/profile_pic.jpeg';
import ChrisProfilePic from './images/Chris_profile.jpeg';

function App() {
  return (
  <div>
    <div className="header">
      <h1>This is not your ordinary task manager</h1>
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
    <div className = "description">
        <h2>About Us</h2>
        <p>
          Alex and Chris have created a to-do-list for you to <br />
          customize your daily tasks which can be overwhelming. <br />
          This application allows you to organize your tasks with its <br />
          severity level. <br />
          Dive into this to-do-list and see what it's all about.
        </p>
    </div>
    <div className = "image_layout">
      <img src={AlexProfilePic} alt="Alex's Profile" />
      <span class="name">Alex Fridman</span>
      <img src={ChrisProfilePic} alt="Chris's Profile" />
      <span class="name">YoungSu Chris</span>
    </div>
    <div className="header">
      <h2>Follow us on:</h2>
      <div className="social_media_app">
        <SocialIcon url="https://twitter.com/" />
        <SocialIcon url="https://facebook.com/" />
        <SocialIcon url="https://instagram.com/" />
        <SocialIcon url="https://github.com/" /> 
      </div>
    </div>
  </div>
  );
}

export default App;