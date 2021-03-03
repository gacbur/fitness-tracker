import { combineReducers } from 'redux'

import weightReducer from './weightReducer'
import dietReducer from './dietReducer'
import singleDiaryItemReducer from './singleDiaryItemReducer'

const RootReducer = combineReducers({
    weight: weightReducer,
    diet: dietReducer,
    singleDiaryItem: singleDiaryItemReducer
})

export default RootReducer