import React, { useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { v4 as uuidv4 } from 'uuid';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
//@ts-ignore
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { DataGrid, ColDef } from '@material-ui/data-grid';
import { Button } from '@material-ui/core'

import PageTitle from '../../components/pagetitle/PageTitle'

import { RootStore } from '../../redux/Store'
import { addNewDiaryEntry, removeDiaryEntry } from '../../redux/actions/dietDiaryActions'

import "./DietDiary.css"


const DietDiary = () => {

    const matches = useMediaQuery('(max-width:500px)');

    const dispatch = useDispatch()

    const history = useHistory()

    const diaryEntries = useSelector((state: RootStore) => state.diet.diaryEntries)

    const columns: ColDef[] = [
        { field: 'date', headerName: 'Date', width: 110 },
        { field: 'name', headerName: 'Name', width: 110 },
        {
            field: 'View',
            headerName: "",
            renderCell: (params: any) => (
                <strong>
                    <Button
                        onClick={() => history.push(`/diary-item/${params.row.id}`)}
                        variant="contained"
                        color="primary"
                        size="small"
                    >
                        View
                    </Button>
                </strong>
            ),
        },
    ]

    const [diaryEntry, setDiaryEntry] = useState({
        name: '',
        date: ''
    })

    const [selectedDiaryEntries, setSelectedDiaryEntries] = useState<string[]>([]);
    const [deleteBtnActive, setDeleteBtnActive] = useState<boolean>(false)

    useEffect(() => {
        if (selectedDiaryEntries.length > 0) {
            setDeleteBtnActive(true)
        } else {
            setDeleteBtnActive(false)
        }
    }, [selectedDiaryEntries])

    const handleChangeDiaryInputs = (e: React.FormEvent<HTMLFormElement>) => {
        setDiaryEntry({
            ...diaryEntry,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const handleAddDiaryEntry = () => {
        dispatch(addNewDiaryEntry({
            id: uuidv4(),
            name: diaryEntry.name,
            date: diaryEntry.date
        }))
    }

    const handleRemoveDiaryEntries = (records: any) => {
        dispatch(removeDiaryEntry(records))
        setSelectedDiaryEntries([])
    }

    return (
        <>
            <PageTitle title={'Diet Diary'} />
            <div className="diet-diary">
                <ValidatorForm
                    onSubmit={() => handleAddDiaryEntry()}
                    className="diet-diary__form">
                    <Box display="flex" flexDirection={matches ? 'column' : 'row'} justifyContent="center" alignItems="center">
                        <Box >
                            <TextValidator
                                onChange={(e: React.FormEvent<HTMLFormElement>) => handleChangeDiaryInputs(e)}
                                value={diaryEntry.name}
                                name="name"
                                id="text"
                                type="text"
                                label="Name (optional)"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>
                        <Box ml={matches ? 0 : 3} mt={matches ? 4 : 0} >
                            <TextValidator
                                onChange={(e: React.FormEvent<HTMLFormElement>) => handleChangeDiaryInputs(e)}
                                value={diaryEntry.date}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                inputProps={{ min: "2010-01-24", max: "2030-01-01" }}
                                name="date"
                                id="date"
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
                {diaryEntries.length > 0 ?
                    <>
                        <div className="diet-diary__table">
                            < DataGrid
                                rows={diaryEntries}
                                columns={columns}
                                pageSize={5}
                                checkboxSelection
                                disableColumnSelector={true}
                                disableSelectionOnClick={true}
                                onSelectionModelChange={(param: any) => (
                                    setSelectedDiaryEntries(param.selectionModel))}
                            />
                            <Box mt={3}>
                                {
                                    deleteBtnActive ?
                                        <Button
                                            onClick={() => handleRemoveDiaryEntries(selectedDiaryEntries)}
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
                    </>
                    :
                    <div className="diet-diary__no-data">
                        <h4>No items added yet.</h4>
                    </div>
                }
            </div>
        </>
    )
}

export default DietDiary
