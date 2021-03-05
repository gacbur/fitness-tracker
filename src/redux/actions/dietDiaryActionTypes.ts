export const ADD_NEW_DIARY_ENTRY = "ADD_NEW_DIARY_ENTRY"
export const REMOVE_DIARY_ENTRY = "REMOVE_DIARY_ENTRY"
export const ADD_NEW_MEAL = "ADD_NEW_MEAL"
export const REMOVE_MEAL = "REMOVE_MEAL"

export type Meal = {
    id: string,
    name: string,
    time: string,
    kcal: number,
    protein: number,
    carbs: number,
    fat: number
}

export type DiaryEntry = {
    id: string,
    date: string
    name?: string,
    meals?: Meal[]
}

export interface AddNewDiaryEntry {
    type: typeof ADD_NEW_DIARY_ENTRY,
    payload: DiaryEntry
}

export interface RemoveDiaryEntry {
    type: typeof REMOVE_DIARY_ENTRY,
    payload: string[]
}

export interface AddNewMeal {
    type: typeof ADD_NEW_MEAL,
    payload: {
        meal: Meal,
        diaryItemId: string
    }
}

export interface RemoveMeal {
    type: typeof REMOVE_MEAL,
    payload: {
        id: string[],
        diaryItemId: string
    }
}

export type DiaryDispatchTypes = AddNewDiaryEntry | RemoveDiaryEntry | AddNewMeal | RemoveMeal