export const ADD_TO_WEIGHT = "ADD_TO_WEIGHT"
export const REMOVE_FROM_WEIGHT = "REMOVE_FROM_WEIGHT"
export const GET_SORTED_WEIGHT_RECORDS = "GET_SORTED_WEIGHT_RECORDS"

export type WeightRecord = {
    id: string,
    weight: number,
    date: string
}

export interface AddToWeight {
    type: typeof ADD_TO_WEIGHT,
    payload: WeightRecord
}

export interface RemoveFromWeight {
    type: typeof REMOVE_FROM_WEIGHT,
    payload: string[];
}

export interface GetSortedWeightRecords {
    type: typeof GET_SORTED_WEIGHT_RECORDS
}

export type WeightDispatchTypes = AddToWeight | RemoveFromWeight | GetSortedWeightRecords