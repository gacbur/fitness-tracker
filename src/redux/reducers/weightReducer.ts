import { ADD_TO_WEIGHT, REMOVE_FROM_WEIGHT, WeightRecord, WeightDispatchTypes } from '../actions/weightActionTypes'

interface InitialStateI {
    weightRecords: WeightRecord[],
    weightRecordsSorted: WeightRecord[]
}

const initialState: InitialStateI = {
    weightRecords: [],
    weightRecordsSorted: []
}

const weightReducer = (state: InitialStateI = initialState, action: WeightDispatchTypes): InitialStateI => {
    switch (action.type) {
        case ADD_TO_WEIGHT:
            const weight_records = [action.payload, ...state.weightRecords,]
            const weight_records_sorted = [action.payload, ...state.weightRecords,].sort((a, b) => a.date.localeCompare(b.date))

            return {
                weightRecords: weight_records,
                weightRecordsSorted: weight_records_sorted
            }
        case REMOVE_FROM_WEIGHT:
            const weight_records_remove = state.weightRecords.filter(item => !action.payload.includes(item.id))
            const weight_records_sorted_remove = state.weightRecords.filter(item => !action.payload.includes(item.id))

            return {
                weightRecords: weight_records_remove,
                weightRecordsSorted: weight_records_sorted_remove
            }
        default:
            return state
    }
}

export default weightReducer