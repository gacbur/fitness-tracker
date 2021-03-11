import { FC, useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { RouteComponentProps, withRouter } from 'react-router';

import { v4 as uuidv4 } from 'uuid';

import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { DataGrid, ColDef } from '@material-ui/data-grid';
// @ts-ignore
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

import { IoMdAdd } from 'react-icons/io'

import './SingleDiaryItem.css'
import '../../components/singleDiaryItemTotals/SingleDiaryItemTotals.css'

import { RootStore } from '../../redux/Store'

import { singleDiaryItemLoaded, getSingleDiaryItem } from '../../redux/actions/singleDiaryItemActions'
import { addNewMeal, removeMeal } from '../../redux/actions/dietDiaryActions'

import PageTitle from '../../components/pagetitle/PageTitle'

import SingleDiaryItemTotals from '../../components/singleDiaryItemTotals/SingleDiaryItemTotals'

type SingleRecipeParams = {
    id: string
}

type SingleRecipeProps = RouteComponentProps<SingleRecipeParams>

const SingleDiaryItem: FC<SingleRecipeProps> = ({ match }) => {

    const id = match.params.id

    const dispatch = useDispatch()

    const diaryEntries = useSelector((state: RootStore) => state.diet.diaryEntries)
    const singleDiaryItemIsLoaded = useSelector((state: RootStore) => state.singleDiaryItem.singleDiaryItemLoaded)
    const singleDiaryItem = useSelector((state: RootStore) => state.singleDiaryItem.singleDiaryItem)

    useEffect(() => {
        if (diaryEntries.length > 0) {
            dispatch(singleDiaryItemLoaded(false))
            const tempDiaryEntries = diaryEntries.filter(item => item.id === id)
            dispatch(getSingleDiaryItem(tempDiaryEntries[0]))
            dispatch(singleDiaryItemLoaded(true))
        }
    }, [id, dispatch, diaryEntries])

    useEffect(() => {
        ValidatorForm.addValidationRule('minValue', (value: number) => {
            if (value > 0) {
                return true
            }
            return false
        })
    }, [])

    const columns: ColDef[] = [
        { field: 'name', headerName: 'Name', width: 100 },
        { field: 'time', headerName: 'Time', width: 100 },
        { field: 'kcal', headerName: 'kcal', width: 100 },
        { field: 'protein', headerName: 'protein', width: 100 },
        { field: 'carbs', headerName: 'carbs', width: 100 },
        { field: 'fat', headerName: 'fat', width: 100 },
    ]

    const [selectedMeals, setSelectedMeals] = useState<string[]>([]);
    const [deleteBtnActive, setDeleteBtnActive] = useState<boolean>(false)

    useEffect(() => {
        if (selectedMeals.length > 0) {
            setDeleteBtnActive(true)
        } else {
            setDeleteBtnActive(false)
        }
    }, [selectedMeals])

    const [diaryMealValues, setDiaryMealValues] = useState({
        name: '',
        time: '',
        kcal: 0,
        protein: 0,
        carbs: 0,
        fat: 0
    })

    const handleChangeMealValues = (e: React.FormEvent<HTMLFormElement>) => {
        setDiaryMealValues({
            ...diaryMealValues,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const handleAddNewMeal = () => {
        const { name, time, kcal, protein, carbs, fat } = diaryMealValues
        const meal = { id: uuidv4(), name, time, kcal, protein, carbs, fat }

        dispatch(addNewMeal(id, meal))
    }

    const handleRemoveMeal = (records: any) => {
        dispatch(removeMeal(id, records))
        setSelectedMeals([])
    }

    const textFieldStyle = { minHeight: "79px" };

    return (
        <>
            <PageTitle title={`Diary Item`} />
            <div className="single-diary-item">
                {singleDiaryItemIsLoaded && singleDiaryItem
                    ?
                    <>
                        <div className="single-diary-item__header">
                            <h4>Day: {singleDiaryItem.date}</h4>
                            {singleDiaryItem.name !== '' ? <h5>Name: {singleDiaryItem.name}</h5> : null}
                        </div>
                        <div className="single-diary-item__form">
                            <ValidatorForm
                                onSubmit={() => handleAddNewMeal()}
                            >
                                <Box>
                                    <Box >
                                        <TextValidator style={textFieldStyle}
                                            onChange={(e: React.FormEvent<HTMLFormElement>) => handleChangeMealValues(e)}
                                            value={diaryMealValues.name}
                                            validators={['required']}
                                            errorMessages={['this field is required']}
                                            name="name"
                                            id="name"
                                            type="text"
                                            label="Name"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Box>
                                    <Box mt={2}>
                                        <TextValidator style={textFieldStyle}
                                            onChange={(e: React.FormEvent<HTMLFormElement>) => handleChangeMealValues(e)}
                                            value={diaryMealValues.time}
                                            validators={['required']}
                                            errorMessages={['this field is required']}
                                            name="time"
                                            id="time"
                                            label="Time"
                                            type="time"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }} />
                                    </Box>
                                    <Box mt={3}>
                                        <TextValidator style={textFieldStyle}
                                            onChange={(e: React.FormEvent<HTMLFormElement>) => handleChangeMealValues(e)}
                                            value={diaryMealValues.kcal}
                                            validators={['required', 'minValue']}
                                            errorMessages={['this field is required', 'kcal must be greater than 0']}
                                            name="kcal"
                                            id="kcal"
                                            label="kcal"
                                            type="number"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }} />
                                    </Box>
                                    <Box mt={2}>
                                        <TextValidator style={textFieldStyle}
                                            onChange={(e: React.FormEvent<HTMLFormElement>) => handleChangeMealValues(e)}
                                            value={diaryMealValues.protein}
                                            validators={['required', 'minValue']}
                                            errorMessages={['this field is required', 'protein must be greater than 0']}
                                            name="protein"
                                            id="protein"
                                            label="protein (in grams)"
                                            type="number"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }} />
                                    </Box>
                                    <Box mt={2}>
                                        <TextValidator style={textFieldStyle}
                                            onChange={(e: React.FormEvent<HTMLFormElement>) => handleChangeMealValues(e)}
                                            value={diaryMealValues.carbs}
                                            validators={['required', 'minValue']}
                                            errorMessages={['this field is required', 'carbs must be greater than 0']}
                                            name="carbs"
                                            id="carbs"
                                            label="carbs (in grams)"
                                            type="number"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }} />
                                    </Box>
                                    <Box mt={2}>
                                        <TextValidator style={textFieldStyle}
                                            onChange={(e: React.FormEvent<HTMLFormElement>) => handleChangeMealValues(e)}
                                            value={diaryMealValues.fat}
                                            validators={['required', 'minValue']}
                                            errorMessages={['this field is required', 'fat must be greater than 0']}
                                            name="fat"
                                            id="fat"
                                            label="fat (in grams)"
                                            type="number"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }} />
                                    </Box>
                                </Box>
                                <Box mt={5} display="flex" justifyContent="center">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >
                                        ADD NEW MEAL <IoMdAdd style={{ fontSize: '20px', marginLeft: '5px' }} />
                                    </Button>
                                </Box>
                            </ValidatorForm>
                        </div>
                        {singleDiaryItem.meals && singleDiaryItem.meals.length > 0 ?
                            <>
                                <div className="single-diary-item__table">
                                    < DataGrid
                                        rows={singleDiaryItem.meals}
                                        columns={columns}
                                        pageSize={5}
                                        checkboxSelection
                                        disableColumnSelector={true}
                                        disableSelectionOnClick={true}
                                        onSelectionModelChange={(param: any) => (
                                            setSelectedMeals(param.selectionModel))}
                                    />
                                    <Box mt={3}>
                                        {
                                            deleteBtnActive ?
                                                <Button
                                                    onClick={() => handleRemoveMeal(selectedMeals)}
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
                                <div className="single-diary-item__pie-chart">
                                    <SingleDiaryItemTotals mealsData={singleDiaryItem.meals} />
                                </div>
                            </>
                            :
                            <div className="diet-diary__no-data">
                                <h4>No items added yet.</h4>
                            </div>
                        }
                    </>
                    :
                    <CircularProgress size={60} />
                }
            </div>
        </>
    )
}

export default withRouter(SingleDiaryItem)
