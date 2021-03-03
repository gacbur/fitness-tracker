export const ADD_NEW_DIARY_ENTRY = "ADD_NEW_DIARY_ENTRY"
export const REMOVE_DIARY_ENTRY = "REMOVE_DIARY_ENTRY"

export type DiaryEntry = {
    id: string,
    date: string
    name?: string,
}

export interface AddNewDiaryEntry {
    type: typeof ADD_NEW_DIARY_ENTRY,
    payload: DiaryEntry
}

export interface RemoveDiaryEntry {
    type: typeof REMOVE_DIARY_ENTRY,
    payload: string[]
}

export type DiaryDispatchTypes = AddNewDiaryEntry | RemoveDiaryEntry