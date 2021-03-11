import { Dispatch } from 'redux'
import { WeightDispatchTypes, ADD_TO_WEIGHT, REMOVE_FROM_WEIGHT, GET_SORTED_WEIGHT_RECORDS, WeightRecord } from './weightActionTypes'

export const addToWeight = (weight_record: WeightRecord) => (dispatch: Dispatch<WeightDispatchTypes>, getState: any) => {
    dispatch({
        type: ADD_TO_WEIGHT,
        payload: weight_record
    })

    localStorage.setItem("weightRecords", JSON.stringify(getState().weight.weightRecords));
}

export const removeFromWeight = (records: string[]) => (dispatch: Dispatch<WeightDispatchTypes>, getState: any) => {
    dispatch({
        type: REMOVE_FROM_WEIGHT,
        payload: records
    })

    localStorage.setItem("weightRecords", JSON.stringify(getState().weight.weightRecords));
}

export const getSortedWeightRecords = () => (dispatch: Dispatch<WeightDispatchTypes>, getState: any) => {
    dispatch({
        type: GET_SORTED_WEIGHT_RECORDS
    })
}