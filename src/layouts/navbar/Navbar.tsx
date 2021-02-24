import React from 'react'

import { Link } from 'react-router-dom'

import './Navbar.css'

import { GiHamburgerMenu } from 'react-icons/gi'


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <Link to="/">Fitness Tracker</Link>
            </div>
            <div className="navbar__button">
                <button>
                    <GiHamburgerMenu />
                </button>
            </div>
        </div>
    )
}

export default Navbar
