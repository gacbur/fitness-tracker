import { combineReducers } from 'redux'

import weightReducer from './weightReducer'
import dietReducer from './dietReducer'

const RootReducer = combineReducers({
    weight: weightReducer,
    diet: dietReducer
})

export default RootReducer