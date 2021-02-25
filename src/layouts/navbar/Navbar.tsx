import React, { FC, SetStateAction } from 'react'

import { Link } from 'react-router-dom'

import './Navbar.css'

import { GiHamburgerMenu } from 'react-icons/gi'

type navbarProps = {
    hide_menu: React.Dispatch<SetStateAction<boolean>>
}

const Navbar: FC<navbarProps> = ({ hide_menu }) => {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <Link to="/">Fitness Tracker</Link>
            </div>
            <div className="navbar__button">
                <button
                    onClick={() => hide_menu(true)}
                >
                    <GiHamburgerMenu />
                </button>
            </div>
        </div>
    )
}

export default Navbar
