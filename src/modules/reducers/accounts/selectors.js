import { createSelector } from 'reselect'

export const selectAccountState = state => state.accounts

export const selectActiveAccount = createSelector(selectAccountState, accounts => accounts.activeAccount)
export const selectAllAccounts = createSelector(selectAccountState, accounts => accounts.accounts)
