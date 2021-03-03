import { GET_SINGLE_DIARY_ITEM, SINGLE_DIARY_ITEM_LOADED, SingleDiaryItemDispatchTypes } from '../actions/singleDiaryItemActionTypes'
import { DiaryEntry } from '../actions/dietDiaryActionTypes'

interface InitialStateI {
    singleDiaryItemLoaded: boolean,
    singleDiaryItem?: DiaryEntry
}

const initialState: InitialStateI = {
    singleDiaryItemLoaded: false,
}

const singleDiaryItemReducer = (state: InitialStateI = initialState, action: SingleDiaryItemDispatchTypes): InitialStateI => {
    switch (action.type) {
        case SINGLE_DIARY_ITEM_LOADED:
            return {
                ...state,
                singleDiaryItemLoaded: action.payload
            }
        case GET_SINGLE_DIARY_ITEM:
            return {
                ...state,
                singleDiaryItem: action.payload
            }
        default:
            return state
    }
}


export default singleDiaryItemReducer