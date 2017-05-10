import { combineReducers } from 'redux'
import addTotalReducer from './addTotalReducer'
import addToTableReducer from './addToTableReducer'

const rootReducer = combineReducers({
    addTotalReducer,
    addToTableReducer
})

export default rootReducer