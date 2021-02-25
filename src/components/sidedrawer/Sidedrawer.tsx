import React, { FC, SetStateAction, useState } from 'react'

import { Link } from 'react-router-dom'

import './Sidedrawer.css'

import { IoIosClose, IoIosArrowDown } from 'react-icons/io'

type siderdrawerProps = {
    show: boolean,
    hide_menu: React.Dispatch<SetStateAction<boolean>>
}

const Sidedrawer: FC<siderdrawerProps> = ({ show, hide_menu }) => {

    const [expandAccordion, setExpandAccordion] = useState(false)

    return (
        <div className={`sidedrawer ${show ? 'show' : ''}`}>
            <button
                onClick={() => hide_menu(false)}
            >
                <IoIosClose />
            </button>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/dashboard"><li>Dashboard</li></Link>
                <div className="sidedrawer__accordion">
                    <div className="sidedrawer__header"
                        onClick={() => setExpandAccordion(prevState => !prevState)}
                    >
                        <span>Add new entry <i className={`icon ${expandAccordion ? 'rotate' : ''}`}><IoIosArrowDown /></i></span>
                    </div>
                    <div
                        className={`sidedrawer__expandable-links ${expandAccordion ? 'show' : ''}`}

                    >
                        <Link to="/workouts" onClick={() => hide_menu(false)}><li>workout</li></Link>
                        <Link to="/nutrition" onClick={() => hide_menu(false)} ><li>nutrition</li></Link>
                        <Link to="/weight" onClick={() => hide_menu(false)}><li>weight</li></Link>
                    </div>
                </div>
            </ul>
        </div >
    )
}

export default Sidedrawer
