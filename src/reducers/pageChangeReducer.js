import { currentPage as types } from '../actions/actionTypes'
import initialState from './initialState'

export default function pageChangeReducer(state = initialState.currentPage, action) {
    switch ( action.type ) {
        case types.PAGE_CHANGED:
            return Object.assign({}, state, { index: action.payload.index } )
        default:
            return state
    }
}