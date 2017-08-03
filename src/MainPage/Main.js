import React, { Component } from 'react';
import './main.css'
class Main extends Component {
    render() {
        return (
                <div className='cloud-text'>
                    <div className='logo'>
                        <img className='logo-img' src={require('./logo.png')}/>
                    </div>
                    <div className='text'> 
                        <h1> I'M GOOD. JUST ASK MY MOM.</h1>
                        <p> Jr. Webdeveloper + React + Node/Express + PostgresSql  </p>
                    </div>
                    <img className='cloud'src={require('./cool-cloud.jpg')}/>
                </div>
        );
    }
}

export default Main;