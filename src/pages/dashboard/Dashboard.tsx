import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { useHistory } from 'react-router'

import { RootStore } from '../../redux/Store'

import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button';

import { WeightRecord } from '../../redux/actions/weightActionTypes'
import { DiaryEntry } from '../../redux/actions/dietDiaryActionTypes'

import './Dashboard.css'

import PageTitle from '../../components/pagetitle/PageTitle'

import { IoArrowUndoOutline } from 'react-icons/io5'

const Dashboard = () => {

    const history = useHistory()

    const weightRecords = useSelector((state: RootStore) => state.weight.weightRecords)
    const diaryEntries = useSelector((state: RootStore) => state.diet.diaryEntries)

    const [weightLatestEntry, setWeightLatestEntry] = useState<WeightRecord>()
    const [nutritionLatestEntry, setNutritionLatestEntry] = useState<DiaryEntry>()

    useEffect(() => {
        if (weightRecords.length > 0) {
            setWeightLatestEntry(weightRecords[0])
        }
        if (diaryEntries.length > 0) {
            setNutritionLatestEntry(diaryEntries[0])
        }
    }, [])

    return (
        <>
            <PageTitle title={'Dashboard'} />
            <div className="dashboard">
                <div className="dashboard__items">
                    <div className="dashboard__item">
                        <h2>Nutrition</h2>
                        {nutritionLatestEntry ?
                            <>
                                <strong><p>latest entry:</p></strong>
                                <strong><p>{nutritionLatestEntry.date}</p></strong>
                                <br />
                                <Button style={{ textTransform: 'none', marginTop: '4em' }} variant="outlined" color="primary" onClick={() => history.push(`/diary-item/${nutritionLatestEntry.id}`)}>
                                    View latest entry <IoArrowUndoOutline style={{ marginLeft: '9px', fontSize: '18px' }} />
                                </Button>
                            </>
                            :
                            <>
                                <p>Add nutrition entries to see the latest one here!</p>
                            </>
                        }

                        <Link to="/diet_diary">
                            <button className="dashboard__new-entry-btn">Add new nutrition entry</button>
                        </Link>
                    </div>
                    <div className="dashboard__item">
                        <h2>Weight</h2>
                        {weightLatestEntry ?
                            <>
                                <strong><p>latest entry:</p></strong>
                                <strong><p>{weightLatestEntry.date}</p></strong>
                                <br />
                                <p>Your latest weight entry: <strong>
                                    {weightLatestEntry.weight}kg</strong></p>
                            </>
                            :
                            <>
                                <p>Add weight entries to see the latest one here!</p>
                            </>
                        }
                        <Link to="/weight">
                            <button className="dashboard__new-entry-btn">Add new weight entry</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
