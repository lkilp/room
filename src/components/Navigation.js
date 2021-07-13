import React, { useState } from 'react';
import './Navigation.scss';
import logo from '../assets/images/logo.svg';

const Navigation = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    const { slide } = props;
    const style = {
        backgroundImage: `url(${slide.url})`
    };
    return (

        <div className="Navigation" style={style}>

            <nav>
                <svg className={"hamburger" + (menuOpen ? " close" : "")} onClick={() => toggleMenu()} width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd" /></svg>
                {menuOpen && <div className='mobile-filter' />}
                {menuOpen && <div className="mobile-menu">
                    <svg className='close' onClick={() => toggleMenu()} width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000" fill-rule="evenodd" opacity=".201" /></svg>
                    <a href='.'>home</a>
                    <a href='.'>shop</a>
                    <a href='.'>about</a>
                    <a href='.'>contact</a>
                </div>}
                <img className='logo' src={logo} alt='room logo'></img>
                <a className='underline' href='.'>home</a>
                <a className='underline' href='.'>shop</a>
                <a className='underline' href='.'>about</a>
                <a className='underline' href='.'>contact</a>
            </nav>
        </div>
    )
}
export default Navigation;

