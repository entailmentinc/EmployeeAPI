import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import users from './helpers/userStub.json'

const initialState = {
  user: {
    users,
    user: null,
  },
  auth: false,
}
let enhancer = null
if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk)
} else {
  const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default
  enhancer = composeWithDevTools(applyMiddleware(thunk, reduxImmutableStateInvariant()))
}
const store = createStore(rootReducer, initialState, enhancer)

export default store
