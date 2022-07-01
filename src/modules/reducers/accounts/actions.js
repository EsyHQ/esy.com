
import { EtherscanProvider } from "@ethersproject/providers"
// import detectEthereumProvider from "@metamask/detect-provider"

import { 
         FETCH_ACCOUNTS,
         FETCH_ENS_NAME,
         FETCH_ACCOUNTS_SUCCESS, 
         FETCH_ACCOUNTS_FAILURE,
         FETCH_ENS_NAME_FAILURE,
         FETCH_ENS_NAME_SUCCESS,
} from './actionTypes'

import { getWeb3Provider } from "../../utils/provider"


const fetchAccounts = () => {
    return async dispatch => {
        try {
            dispatch(fetchAccountsPending())

            // const metaMaskProvider = await detectEthereumProvider()
            const metaMaskProvider = {}

            const web3Provider = await getWeb3Provider(metaMaskProvider)
            const accounts = await metaMaskProvider.request({ method: "eth_requestAccounts" })
            const userAccount = await accounts[0]
            const ensName = await web3Provider.lookupAddress(userAccount) // NTS: Find better place to fetch ENS

            const etherScanProvider = await new EtherscanProvider(null, process.env.GATSBY_ETHERSCAN_API_KEY)
            const history = await etherScanProvider.getHistory(userAccount)
            const etherBalance = await web3Provider.getBalance(userAccount)

            const payLoad = {
                accounts,
                ensName,
                history,
                etherBalance,
            }

            await dispatch(fetchAccountsSuccess(payLoad))
    
        } catch (error) {
            if (error.response) {
                dispatch(fetchAccountsFailure(error.response))
            } else if (error.request) {
                dispatch(fetchAccountsFailure(error.request))
            } else {
                dispatch(fetchAccountsFailure(error.message))
            }
        }
    }
}


const fetchAccountsPending = () => {
    return {
        type: FETCH_ACCOUNTS,
    }
}


const fetchAccountsSuccess = payload => {
    return {
        type: FETCH_ACCOUNTS_SUCCESS,
        payload,
    }
}


const fetchAccountsFailure = error => {
    return {
        type: FETCH_ACCOUNTS_FAILURE,
        payload: error,
    }
}


const fetchENSNameSuccess = ensName => {
    return {
        type: FETCH_ENS_NAME_SUCCESS,
        payload: ensName,
    }
}








export {
    fetchAccounts,
    fetchAccountsSuccess,
    fetchAccountsFailure,
}