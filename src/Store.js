import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const initialState = {
  user: {
    users: [
      {
          id: 1,
          name: "Akon",
          birth: "2021-01-19",
          address: "jaipur",
          isEdit: false,
      },
      {
          id: 2,
          name: "Dino",
          birth: "2021-01-19",
          address: "jaipur",
          isEdit: false,
      },
      ],
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
