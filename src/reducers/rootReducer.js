import { combineReducers } from 'redux'
import addTotalReducer from './addTotalReducer'
import addToTableReducer from './addToTableReducer'
import fetchSideTitleReducer from './fetchSideTitleReducer'

const rootReducer = combineReducers({
    addTotalReducer,
    addToTableReducer,
    fetchSideTitleReducer
})

export default rootReducer