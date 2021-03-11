import { Switch, Route } from 'react-router-dom'

import Home from '../../pages/home/Home'
import Dashboard from '../../pages/dashboard/Dashboard'
import DietDiary from '../../pages/dietDiary/DietDiary'
import Weight from '../../pages/weight/Weight'
import SingleDiaryItem from '../../pages/singleDiaryItem/SingleDiaryItem'
import PageNotFound from '../../pages/pageNotFound/PageNotFound'

const Main = () => {
    return (
        <div className="main">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/diet_diary" component={DietDiary} />
                <Route path='/diary-item/:id' component={SingleDiaryItem} />
                <Route path="/weight" component={Weight} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    )
}

export default Main
