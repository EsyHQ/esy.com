 
import { ethers } from "ethers"


// Returns an EthersJS Web3 Provider
export const getWeb3Provider = (metaMaskProvider)  => {
    return new ethers.providers.Web3Provider(metaMaskProvider)
}

export const getNeworthByAddress = (metaMaskProvider) => {
    return null
}

export const formatERC20 = (bigNumber, decimalPlaces) => {
    // Should return formatted ERC20 - similar to formatEther util func.
    return ethers.utils.formatUnits(bigNumber)
}


export const getFormattedEthBalance = (ethBalance) => {
    return ethers.utils.formatEther(ethBalance)
}