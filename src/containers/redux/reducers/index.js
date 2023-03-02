import {currencyReducer} from './currencyReducer'
import { combineReducers } from 'redux'

const reducers=combineReducers({
    currencyData:currencyReducer
})
export default reducers