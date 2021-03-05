import { Dispatch } from 'redux';
import { ADD_NEW_DIARY_ENTRY, REMOVE_DIARY_ENTRY, ADD_NEW_MEAL, REMOVE_MEAL, DiaryEntry, Meal, DiaryDispatchTypes } from './dietDiaryActionTypes'

export const addNewDiaryEntry = (new_entry: DiaryEntry) => (dispatch: Dispatch<DiaryDispatchTypes>, getState: any) => {
    dispatch({
        type: ADD_NEW_DIARY_ENTRY,
        payload: new_entry
    })
}

export const removeDiaryEntry = (diaryEntries: string[]) => (dispatch: Dispatch<DiaryDispatchTypes>, getState: any) => {
    dispatch({
        type: REMOVE_DIARY_ENTRY,
        payload: diaryEntries
    })
}

export const addNewMeal = (diaryItemId: string, meal: Meal) => (dispatch: Dispatch<DiaryDispatchTypes>, getState: any) => {
    dispatch({
        type: ADD_NEW_MEAL,
        payload: {
            meal,
            diaryItemId
        }
    })
}
export const removeMeal = (diaryItemId: string, id: string[]) => (dispatch: Dispatch<DiaryDispatchTypes>, getState: any) => {
    dispatch({
        type: REMOVE_MEAL,
        payload: {
            id,
            diaryItemId
        }
    })
}