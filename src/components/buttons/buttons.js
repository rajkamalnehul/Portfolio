import React from 'react';
import './buttons.css';
import {Link} from 'react-router-dom';


class Buttons extends React.Component{
    constructor(){
        super();
        this.state ={
            active:' '
        }
    }

     handleActive = (activeItem)=>{
        this.setState({active:activeItem});

    }

    render(){
    return(
        <div className='btn-con'> 
            <Link className={'btn ' + (this.state.active==='home'? 'active':'')} to='/' onClick={e=>this.handleActive('home')}>Home</Link>
            <Link className={'btn ' + (this.state.active==='about'? 'active':'')} to='/about' onClick={e=>this.handleActive('about')}>About</Link>
            <Link className={'btn ' + (this.state.active==='projects'? 'active':'')} to='/projects' onClick={e=>this.handleActive('projects')}>Projects</Link>
            <Link className={'btn ' + (this.state.active==='contact'? 'active':'')} to='contact' onClick={e=>this.handleActive('contact')}>Contact</Link>   
        </div>
      
    )
}
}

export default Buttons;

/*<Link className='btn' to='/'>Home</Link>
<Link className='btn' to='/about'>About</Link>
<Link className='btn' to='/projects'>Projects</Link>
<Link className='btn' to='contact'>Contact</Link>   */