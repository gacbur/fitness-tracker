import { Dispatch } from 'redux'
import { WeightDispatchTypes, ADD_TO_WEIGHT, REMOVE_FROM_WEIGHT, WeightRecord } from './weightActionTypes'

export const addToWeight = (weight_record: WeightRecord) => (dispatch: Dispatch<WeightDispatchTypes>, getState: any) => {
    dispatch({
        type: ADD_TO_WEIGHT,
        payload: weight_record
    })
}

export const removeFromWeight = (records: string[]) => (dispatch: Dispatch<WeightDispatchTypes>, getState: any) => {
    dispatch({
        type: REMOVE_FROM_WEIGHT,
        payload: records
    })
}