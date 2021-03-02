import { Dispatch } from 'redux';
import { ADD_NEW_DIARY_ENTRY, REMOVE_DIARY_ENTRY, DiaryEntry, DiaryDispatchTypes } from './dietDiaryActionTypes'

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