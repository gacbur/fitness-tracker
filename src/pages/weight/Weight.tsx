import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { v4 as uuidv4 } from 'uuid';

//@ts-ignore
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core'
import { DataGrid, ColDef } from '@material-ui/data-grid';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { RootStore } from '../../redux/Store'
import { addToWeight, removeFromWeight } from '../../redux/actions/weightActions'
import PageTitle from '../../components/pagetitle/PageTitle'

import "./Weight.css"

const Weight = () => {

    const dispatch = useDispatch()

    const weightRecords = useSelector((state: RootStore) => state.weight.weightRecords)
    const weightRecordsSorted = useSelector((state: RootStore) => state.weight.weightRecordsSorted)

    const columns: ColDef[] = [
        { field: 'date', headerName: 'Date', width: 150 },
        { field: 'weight', headerName: 'Weight (kg)', width: 150 },
    ]

    const [weightRecord, setWeightRecord] = useState({
        weight: 0,
        date: ''
    })

    const [selectedRecords, setSelectedRecords] = useState<string[]>([]);
    const [deleteBtnActive, setDeleteBtnActive] = useState<boolean>(false)

    useEffect(() => {
        ValidatorForm.addValidationRule('weightMaxAndMin', (weight: number) => {
            if (weight <= 30 || weight >= 500) {
                return false
            }
            return true
        })
    }, [])


    useEffect(() => {
        if (selectedRecords.length > 0) {
            setDeleteBtnActive(true)
        } else {
            setDeleteBtnActive(false)
        }
    }, [selectedRecords])

    const handleChangeWeightInputs = (e: React.FormEvent<HTMLFormElement>) => {
        setWeightRecord({
            ...weightRecord,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const handleAddWeightRecord = () => {
        dispatch(addToWeight({
            id: uuidv4(),
            weight: weightRecord.weight,
            date: weightRecord.date
        }))
    }

    const handleDeleteWeightRecords = (records: any) => {
        dispatch(removeFromWeight(records))
        setSelectedRecords([])
    }

    const textFieldStyle = { minHeight: "79px" };


    return (
        <>
            <PageTitle title={'Weight'} />
            <div className="weight">
                <ValidatorForm
                    onSubmit={() => handleAddWeightRecord()}
                    className="weight__form">
                    <Box mt={-4}>
                        <TextValidator
                            style={textFieldStyle}
                            value={weightRecord.weight}
                            onChange={(e: React.FormEvent<HTMLFormElement>) => handleChangeWeightInputs(e)}
                            validators={['required', 'weightMaxAndMin']}
                            errorMessages={['this field is required']}
                            name="weight"
                            id="standard-basic"
                            type="number"
                            label="Weight (kg)"
                        />
                    </Box>
                    <Box mt={1}>
                        <TextValidator
                            style={textFieldStyle}
                            value={weightRecord.date}
                            onChange={(e: React.FormEvent<HTMLFormElement>) => handleChangeWeightInputs(e)}
                            name="date"
                            id="date"
                            inputProps={{ min: "2010-01-24", max: "2030-01-01" }}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            label="Date"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }} />
                    </Box>
                    <Box mt={2}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Add
                        </Button>
                    </Box>
                </ValidatorForm>
                {weightRecords.length > 0 ?
                    <>
                        <div className="weight__table">
                            <DataGrid
                                rows={weightRecords}
                                columns={columns}
                                pageSize={5}
                                checkboxSelection
                                disableColumnSelector={false}
                                disableSelectionOnClick={false}
                                onSelectionModelChange={(param: any) => (
                                    setSelectedRecords(param.selectionModel)
                                )}
                            />

                            <Box mt={3}>
                                {
                                    deleteBtnActive ?
                                        <Button
                                            onClick={() => handleDeleteWeightRecords(selectedRecords)}
                                            variant="contained"
                                            color="secondary"
                                        >
                                            Delete
                                    </Button>
                                        :
                                        null
                                }
                            </Box>
                        </div>
                        <div className="weight__graph">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={weightRecordsSorted}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 5,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="5 5" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="weight" stroke="#1890ff" activeDot={{ r: 6 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </>
                    :
                    <div className="weight__no-data">
                        <h4>No data available to visualize.</h4>
                    </div>
                }
            </div>
        </>
    )
}

export default Weight
