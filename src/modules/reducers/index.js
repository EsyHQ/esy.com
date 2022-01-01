import { combineReducers } from 'redux'

import accountReducer from './accounts/'



export const selectUserState = state => state.accounts

export default combineReducers({
    accounts: accountReducer,
})