import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import './Navbar.css'

import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosClose, IoIosArrowDown } from 'react-icons/io'

const Navbar = () => {

    const [showSidebar, setShowSidebar] = useState(false)
    const [expandAccordion, setExpandAccordion] = useState(false)

    return (
        <>
            <div className="navbar">
                <div className="navbar__logo">
                    <Link to="/">Fitness Tracker</Link>
                </div>
                <div className="navbar__button">
                    <button
                        onClick={() => setShowSidebar(true)}
                    >
                        <GiHamburgerMenu />
                    </button>
                </div>
            </div>
            <div className={`sidedrawer ${showSidebar ? 'show' : ''}`}>
                <button
                    onClick={() => setShowSidebar(false)}
                >
                    <IoIosClose />
                </button>
                <ul>
                    <Link to="/" onClick={() => setShowSidebar(false)}><li>Home</li></Link>
                    <Link to="/dashboard" onClick={() => setShowSidebar(false)}><li>Dashboard</li></Link>
                    <div className="sidedrawer__accordion">
                        <div className="sidedrawer__header"
                            onClick={() => setExpandAccordion(prevState => !prevState)}
                        >
                            <span>Add new entry <i className={`icon ${expandAccordion ? 'rotate' : ''}`}><IoIosArrowDown /></i></span>
                        </div>
                        <div
                            className={`sidedrawer__expandable-links ${expandAccordion ? 'show' : ''}`}

                        >
                            <Link to="/workouts" onClick={() => setShowSidebar(false)}><li>workout</li></Link>
                            <Link to="/diet_diary" onClick={() => setShowSidebar(false)} ><li>diet diary</li></Link>
                            <Link to="/weight" onClick={() => setShowSidebar(false)}><li>weight</li></Link>
                        </div>
                    </div>
                </ul>
            </div >
            {showSidebar && <div
                className="backdrop"
                onClick={() => setShowSidebar(false)
                }>

            </div>}
        </>
    )
}

export default Navbar
