import { connect } from 'react-redux'

import { fetchAccounts } from 'src/modules/reducers/accounts/actions'
import { selectAllAccounts, selectActiveAccount } from 'src/modules/reducers/accounts/selectors'

import WritePage from './index'



const mapStateToProps = state => {
    const accounts = selectAllAccounts(state)
    const activeAccount = selectActiveAccount(state)

    return {
        accounts,
        activeAccount,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAccounts: () => dispatch(fetchAccounts()),
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WritePage)