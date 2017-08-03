import React, { Component } from 'react';
import './about.css'

class About extends Component {
    render() {
        return (
            <div>
                <div className='about-wrapper'>
                    <div className='about-logo'>
                        <img className='logo-img' src={require('./logo.png')}/>
                    </div>
                    <div className='happy-img'>
                    </div>
                </div>
                <p className='about-text'>90's sartorial deep v, raclette knausgaard portland affogato. Organic ennui hoodie roof party kogi poke migas. Authentic paleo cold-pressed succulents tofu la croix 90's cray. Health goth paleo taxidermy, stumptown pinterest kogi fanny pack gentrify narwhal cold-pressed bushwick retro. Kale chips banh mi prism pitchfork, truffaut readymade photo booth. La croix chartreuse XOXO, venmo </p>
            </div>
        );
    }
}

export default About;