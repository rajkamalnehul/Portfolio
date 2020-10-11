import React from 'react';
import './home.css';
import ReactTypingEffect from 'react-typing-effect';


  

function Home(){

    return(
        <div className='container home'>
            <h1>Raj Kamal Nehul</h1>
            <ReactTypingEffect className="typingeffect" text={['A React.js Developer', 'A JavaScript Developer','A Web Developer']} speed={80} eraseDelay={800}/>
            <div className="hr_line"><div className="hr_inner"></div></div>
        </div>
    );
}

export default Home;



    