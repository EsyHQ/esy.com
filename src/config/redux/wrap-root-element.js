import React from 'react'
import { Provider } from 'react-redux'
import { throttle } from 'lodash'

import configStore  from 'src/config/configStore'
import { saveState } from 'src/config/loadStorage'

/* 
GatsbyJS convention for wrapping the root element with a provider
See https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement
*/


const store = configStore()

store.subscribe(throttle( () => {
    saveState(store.getState())
}, 1000 ))


export const wrapRootElement = ({ element }) => {

    return <Provider store={store}>{element}</Provider>
}