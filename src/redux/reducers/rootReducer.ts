import { combineReducers } from 'redux'

import weightReducer from './weightReducer'

const RootReducer = combineReducers({
    weight: weightReducer,
})

export default RootReducer