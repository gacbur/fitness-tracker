export const ADD_TO_WEIGHT = "ADD_TO_WEIGHT"
export const REMOVE_FROM_WEIGHT = "REMOVE_FROM_WEIGHT"

export type weightRecord = {
    id: string,
    weight: number,
    date: string
}

export interface AddToWeight {
    type: typeof ADD_TO_WEIGHT,
    payload: weightRecord
}

export interface RemoveFromWeight {
    type: typeof REMOVE_FROM_WEIGHT,
    payload: string[];
}

export type WeightDispatchTypes = AddToWeight | RemoveFromWeight