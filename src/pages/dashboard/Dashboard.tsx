import React from 'react'

import { Link } from 'react-router-dom'

import './Dashboard.css'

import PageTitle from '../../components/pagetitle/PageTitle'

const Dashboard = () => {
    return (
        <>
            <PageTitle title={'Dashboard'} />
            <div className="dashboard">
                <div className="dashboard__items">
                    <div className="dashboard__items__item">
                        <h2>Workout</h2>
                        <p> Feb. 24, 2021</p>
                        <p>Monday	Rest day</p>
                        <p>Tuesday	Rest day</p>
                        <p>Wednesday	Rest day</p>
                        <p>Thursday	Rest day</p>
                        <Link to="/workouts">
                            <button>Add new workout entry</button>
                        </Link>
                    </div>
                    <div className="dashboard__items__item">
                        <h2>Nutrition plan</h2>
                        <p> Feb. 23, 2021</p>
                        <p>Energy	699 kcal</p>
                        <p>Protein	32.4 g</p>
                        <p>Carbohydrates	77.4 g</p>
                        <p>Fat	30 g</p>
                        <Link to="/nutrition">
                            <button>Add new nutrition entry</button>
                        </Link>
                    </div>
                    <div className="dashboard__items__item">
                        <h2>Weight</h2>
                        <p>You current weight is: 105kg</p>
                        <Link to="/weight">
                            <button>Add new weight entry</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
