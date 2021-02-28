import React, { FC } from 'react'

import './PageTitle.css'

type PageTitleProps = {
    title: string
}

const PageTitle: FC<PageTitleProps> = ({ title }) => {
    return (
        <div className="page-title">
            <h2>{title}</h2>
        </div>
    )
}

export default PageTitle
