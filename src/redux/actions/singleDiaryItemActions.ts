import { Dispatch } from 'redux'
import { SINGLE_DIARY_ITEM_LOADED, GET_SINGLE_DIARY_ITEM, SingleDiaryItemDispatchTypes } from './singleDiaryItemActionTypes'
import { DiaryEntry } from './dietDiaryActionTypes'

export const singleDiaryItemLoaded = (isLoaded: boolean) => (dispatch: Dispatch<SingleDiaryItemDispatchTypes>, getState: any) => {
    dispatch({
        type: SINGLE_DIARY_ITEM_LOADED,
        payload: isLoaded
    })
}

export const getSingleDiaryItem = (diaryEntry: DiaryEntry) => (dispatch: Dispatch<SingleDiaryItemDispatchTypes>, getState: any) => {
    dispatch({
        type: GET_SINGLE_DIARY_ITEM,
        payload: diaryEntry
    })
}