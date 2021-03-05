import { ADD_NEW_DIARY_ENTRY, REMOVE_DIARY_ENTRY, ADD_NEW_MEAL, REMOVE_MEAL, DiaryEntry, DiaryDispatchTypes } from '../actions/dietDiaryActionTypes'

interface InitialStateI {
    diaryEntries: DiaryEntry[],
}

const initialState: InitialStateI = {
    diaryEntries: [],
}

const dietReducer = (state: InitialStateI = initialState, action: DiaryDispatchTypes): InitialStateI => {
    switch (action.type) {
        case ADD_NEW_DIARY_ENTRY:
            return {
                diaryEntries: [...state.diaryEntries, action.payload],
            }
        case REMOVE_DIARY_ENTRY:
            const temp_diary_entries = state.diaryEntries.filter(item => !action.payload.includes(item.id))
            return {
                diaryEntries: temp_diary_entries
            }
        case ADD_NEW_MEAL:
            return {
                diaryEntries: state.diaryEntries.map(item => {
                    if (item.id === action.payload.diaryItemId) {
                        if (item.meals !== undefined) {
                            return {
                                ...item,
                                meals: [...item.meals, action.payload.meal]
                            }
                        } else {
                            return {
                                ...item,
                                meals: [action.payload.meal]
                            }
                        }
                    } else {
                        return item
                    }
                })
            }
        case REMOVE_MEAL:
            return {
                diaryEntries: state.diaryEntries.map(item => {
                    if (item.id === action.payload.diaryItemId) {
                        return {
                            ...item,
                            meals: item.meals?.filter(item => !action.payload.id.includes(item.id))
                        }
                    } else {
                        return item
                    }
                })
            }
        default:
            return state
    }
}

export default dietReducer