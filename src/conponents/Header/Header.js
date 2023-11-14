import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h1>this is header section</h1>
            <nav>
           <Link to={'/'}>Home</Link>
           <Link to={'/orderReview'}>Oder Review</Link>
           <Link to={'/grandpa'}>GarndPa</Link>
            </nav>
        </div>
    );
};

export default Header;