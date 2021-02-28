import React from 'react'

import useMediaQuery from '@material-ui/core/useMediaQuery';

import Box from '@material-ui/core/Box';

//@ts-ignore
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

import { Button } from '@material-ui/core'


import "./DietDiary.css"

import PageTitle from '../../components/pagetitle/PageTitle'

const DietDiary = () => {

    const matches = useMediaQuery('(max-width:500px)');

    return (
        <>
            <PageTitle title={'Diet Diary'} />
            <div className="diet-diary">
                <ValidatorForm
                    className="diet-diary__form">
                    <Box display="flex" flexDirection={matches ? 'column' : 'row'} justifyContent="center" alignItems="center">
                        <Box >
                            <TextValidator
                                validators={['required']}
                                errorMessages={['this field is required']}
                                name="name"
                                id="text"
                                type="text"
                                label="Name"
                                variant="outlined"
                            />
                        </Box>
                        <Box ml={matches ? 0 : 3} mt={matches ? 4 : 0} >
                            <TextValidator
                                name="date"
                                id="date"
                                validators={['required']}
                                errorMessages={['this field is required']}
                                label="Date"
                                type="date"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                        </Box>
                    </Box>
                    <Box mt={4} width="100%" display="flex" justifyContent="center">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Add new diary entry
                        </Button>
                    </Box>
                </ValidatorForm>
                <div className="diet-diary__table">

                </div>
            </div>
        </>
    )
}

export default DietDiary
