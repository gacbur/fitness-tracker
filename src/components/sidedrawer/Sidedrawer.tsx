import React, { FC, SetStateAction } from 'react'

import './Sidedrawer.css'

import { IoIosClose } from 'react-icons/io'

type siderdrawerProps = {
    show: boolean,
    hide_menu: React.Dispatch<SetStateAction<boolean>>
}

const Sidedrawer: FC<siderdrawerProps> = ({ show, hide_menu }) => {
    return (
        <div className={`sidedrawer ${show ? 'show' : ''}`}>
            <button
                onClick={() => hide_menu(false)}
            >
                <IoIosClose />
            </button>

        </div >
    )
}

export default Sidedrawer
