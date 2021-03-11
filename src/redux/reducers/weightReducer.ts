import { ADD_TO_WEIGHT, REMOVE_FROM_WEIGHT, WeightRecord, WeightDispatchTypes, GET_SORTED_WEIGHT_RECORDS } from '../actions/weightActionTypes'

interface InitialStateI {
    weightRecords: WeightRecord[],
    weightRecordsSorted: WeightRecord[]
}

const initialState: InitialStateI = {
    weightRecords: localStorage.getItem('weightRecords') ? JSON.parse(localStorage.getItem('weightRecords') || '{}') : [],
    weightRecordsSorted: localStorage.getItem('weightRecords') ? JSON.parse(localStorage.getItem('weightRecords') || '{}') : []
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
        case GET_SORTED_WEIGHT_RECORDS:
            return {
                ...state,
                weightRecordsSorted: [...state.weightRecords].sort((a, b) => a.date.localeCompare(b.date))
            }
        default:
            return state
    }
}

export default weightReducer