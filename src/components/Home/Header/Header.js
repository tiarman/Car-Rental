import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Header.css'
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <section className="header-container">
            <NavBar />
            <Banner/>
        </section>
    );
};

export default Header;