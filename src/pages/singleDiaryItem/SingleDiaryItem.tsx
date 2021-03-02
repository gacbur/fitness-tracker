import React, { FC, useEffect } from 'react'

import { RouteComponentProps, withRouter } from 'react-router';

import './SingleDiaryItem.css'

type SingleRecipeParams = {
    id: string
}

type SingleRecipeProps = RouteComponentProps<SingleRecipeParams>

const SingleDiaryItem: FC<SingleRecipeProps> = ({ match }) => {

    const id = match.params.id

    console.log(match)

    return (
        <div className="single-diary-item">
            {id ? `${id}` : 'loading'}
        </div>
    )
}

export default withRouter(SingleDiaryItem)
