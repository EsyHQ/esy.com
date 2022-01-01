  
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from 'src/modules/reducers'
import { loadState } from './loadStorage'


const persistedState = loadState()


const middlewares = [
  thunk,
  logger,
]


export default function configureStore() {
 return createStore (
   rootReducer,
   persistedState,
   applyMiddleware(...middlewares)
   )
}