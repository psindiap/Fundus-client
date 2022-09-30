import React, { useState } from "react";
import './Auth.css';
import signInImage from './signup.jpg'
import Go from './G_icon.png';

const Auth = () => {
    
   
    return (
      <div className="auth__form-container">
        <div className="auth__form-container_fields">
          
            <img src={Go}/>

            <div className="auth__form-container_fields-content_button items-center">
              <a href="http://localhost:8080/auth/google/"><button className="center">
             Sign-in using Google</button></a>
            </div>
            
        </div>
         <div className="auth__form-container_image">
          <img src={signInImage} alt="Sign In"/>
          </div> 
      </div>
    )
  }
  

export default Auth;