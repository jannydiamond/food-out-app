// @flow

import { combineReducers } from 'redux-loop'
import { reducer as reduxFormReducer } from 'redux-form'

import Location from 'ducks/Location'

export default combineReducers({
  form: reduxFormReducer,
  Location: Location.Reducer,
  test: (state, action) => state
})
