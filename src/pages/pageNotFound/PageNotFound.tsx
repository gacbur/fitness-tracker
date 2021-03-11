import React from 'react'

import { useHistory } from "react-router-dom";

import Button from '@material-ui/core/Button';

import undraw_empty_xct9 from '../../svg/undraw_empty_xct9.svg'

import './PageNotFound.css'

import { HiArrowNarrowLeft } from 'react-icons/hi'

const PageNotFound = () => {

    let history = useHistory();

    return (
        <div className="page-not-found">
            <div className="page-not-found__button">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.goBack()}
                >
                    <HiArrowNarrowLeft />
                </Button>
            </div>
            <div className="page-not-found__text">
                <h1>404</h1>
                <img src={undraw_empty_xct9} alt="page-not-found" />
                <h2>Page Not found, Sorry!</h2>
            </div>

        </div>
    )
}

export default PageNotFound
