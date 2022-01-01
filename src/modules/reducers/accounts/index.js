import {
    FETCH_ACCOUNTS,
    FETCH_ACCOUNTS_SUCCESS,
    FETCH_ACCOUNTS_FAILURE,
} from './actionTypes'


const INITIAL_STATE = {
  activeAccount: {
    ensName: '',
    chainId: null,
    accountType: null,
    address: null,
    etherBalance: null,
    isConnected: false,
    history: [],
  },
  accounts: [],
  error: null,
  isFetchAccountsError: false,
  isFetchAccountsPending: false,
}

export default function reducer(state =  INITIAL_STATE, action = {}) {
  switch (action.type) {
    
    case FETCH_ACCOUNTS:
      return {
        ...state,
        isFetchAccountsPending: true,
      }

    case FETCH_ACCOUNTS_SUCCESS:
      const { accounts, ensName, history, etherBalance } = action.payload
      
      return {
        ...state,
        accounts: action.payload.accounts,
        activeAccount: { ...state.activeAccount, 
          ensName, address: accounts[0], isConnected: true, history, etherBalance, },
        isFetchAccountsPending: false,
     }

     case FETCH_ACCOUNTS_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetchAccountsError: true,
          isFetchAccountsPending: false,
        };

    default:
      return state
    }
  }