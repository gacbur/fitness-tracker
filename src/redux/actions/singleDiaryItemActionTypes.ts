import { DiaryEntry } from './dietDiaryActionTypes'

export const SINGLE_DIARY_ITEM_LOADED = "SINGLE_DIARY_ITEM_LOADED"
export const GET_SINGLE_DIARY_ITEM = "GET_SINGLE_DIARY_ITEM"

export interface SingleDiaryItemLoaded {
    type: typeof SINGLE_DIARY_ITEM_LOADED,
    payload: boolean
}

export interface GetSingleDiaryItem {
    type: typeof GET_SINGLE_DIARY_ITEM,
    payload: DiaryEntry
}

export type SingleDiaryItemDispatchTypes = SingleDiaryItemLoaded | GetSingleDiaryItem