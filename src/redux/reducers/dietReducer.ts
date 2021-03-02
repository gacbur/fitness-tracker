import { ADD_NEW_DIARY_ENTRY, REMOVE_DIARY_ENTRY, DiaryEntry, DiaryDispatchTypes } from '../actions/dietDiaryActionTypes'

interface InitialStateI {
    diaryEntries: DiaryEntry[]
}

const initialState: InitialStateI = {
    diaryEntries: []
}

const dietReducer = (state: InitialStateI = initialState, action: DiaryDispatchTypes): InitialStateI => {
    switch (action.type) {
        case ADD_NEW_DIARY_ENTRY:
            return {
                diaryEntries: [...state.diaryEntries, action.payload]
            }
        case REMOVE_DIARY_ENTRY:
            const temp_diary_entries = state.diaryEntries.filter(item => !action.payload.includes(item.id))
            return {
                diaryEntries: temp_diary_entries
            }
        default:
            return state
    }
}

export default dietReducer