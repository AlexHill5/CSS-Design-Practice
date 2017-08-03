import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css'


class Header extends Component {
    render() {
        return (
            <div className='header-wrapper'>
            <Link to='/' className='links'><h3> Home </h3> </Link>
                <div className='divider'></div>
            <Link to='/about' className='links'><h3> About </h3> </Link>
                <div className='divider'></div>
            <Link to='/work' className='links'><h3> Work </h3> </Link>
                <div className='divider'></div>
            <Link to='/blog' className='links'><h3> Blog </h3> </Link>
                <div className='divider'></div>           
            <Link to='/blog' className='links'><h3> Contact </h3> </Link>
            </div>
        );
    }
}

export default Header;