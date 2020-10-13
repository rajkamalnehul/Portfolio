import React from 'react';
import './home.css';
import ReactTypingEffect from 'react-typing-effect';
import Typist from 'react-typist';
import profilepic from '../assets/profile_photo.jpg';


  

function Home(){

    return(
        <div className='container home' >
        <img src={profilepic} className="profilepic"></img>
        <h1>Raj Kamal Nehul</h1>
        <ReactTypingEffect className="typingeffect" text={['A React.js Developer', 'A JavaScript Developer','A Web Developer']} speed={110} eraseDelay={600}/>
            
            <div className="hr_line"><div className="hr_inner"></div></div>
           
        </div>
    );
}

export default Home;



