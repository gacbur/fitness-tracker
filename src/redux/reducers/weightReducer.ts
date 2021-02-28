import { ADD_TO_WEIGHT, REMOVE_FROM_WEIGHT, weightRecord, WeightDispatchTypes } from '../actions/weightActionTypes'

interface InitialStateI {
    weight_records: weightRecord[]
}

const initialState: InitialStateI = {
    weight_records: []
}

const weightReducer = (state: InitialStateI = initialState, action: WeightDispatchTypes): InitialStateI => {
    switch (action.type) {
        case ADD_TO_WEIGHT:
            const temp_weight_records1 = [...state.weight_records, action.payload].sort((a, b) => a.date.localeCompare(b.date))
            return {
                weight_records: temp_weight_records1
            }
        case REMOVE_FROM_WEIGHT:
            const temp_weight_records2 = state.weight_records.filter(item => !action.payload.includes(item.id))

            return {
                weight_records: temp_weight_records2
            }
        default:
            return state
    }
}

export default weightReducer