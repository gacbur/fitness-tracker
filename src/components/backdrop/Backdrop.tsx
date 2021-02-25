import React, { FC, SetStateAction } from 'react'

import './Backdrop.css'

type backdropProps = {
    show: boolean,
    hide_menu: React.Dispatch<SetStateAction<boolean>>
}

const Backdrop: FC<backdropProps> = ({ show, hide_menu }) => {
    return <div>
        {show && <div
            className="backdrop"
            onClick={() => hide_menu(false)
            }>

        </div>}
    </div>

}

export default Backdrop
