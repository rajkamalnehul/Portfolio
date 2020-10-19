import React from 'react';
import './contact.css';
import Map from '../google-map/map.js';


const location = {
    address: 'Home',
    lat: 23.848986,
    lng: 86.884029,
  }

  

function Contact(){

    return(
        <div className='container'>
            <h1>Contact</h1>
            <div className="hr_line"><div className="hr_inner"></div></div>
            <Map location ={location} zoomLevel={15}/>

           
        </div>
    );
}

export default Contact;