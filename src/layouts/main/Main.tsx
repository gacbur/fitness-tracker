import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from '../../pages/home/Home'
import Dashboard from '../../pages/dashboard/Dashboard'
import Workouts from '../../pages/workouts/Workouts'
import DietDiary from '../../pages/dietDiary/DietDiary'
import Weight from '../../pages/weight/Weight'

const Main = () => {
    return (
        <div className="main">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/workouts" component={Workouts} />
                <Route path="/diet_diary" component={DietDiary} />
                <Route path="/weight" component={Weight} />
            </Switch>
        </div>
    )
}

export default Main
