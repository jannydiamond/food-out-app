import { combineReducers, loop, Cmd } from 'redux-loop'

import * as actions from './actions'
import sideeffects from './sideeffects'

const LocationReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LOCATION_REQUEST': {
      return loop(state, Cmd.run(sideeffects.fetchLocation, {
        successActionCreator: actions.fetchLocationSuccess,
        errorActionCreator: actions.fetchLocationFailure
      }))
    }

    case 'FETCH_LOCATION_SUCCESS': {
      return action.payload
    }

    case 'FETCH_LOCATION_FAILURE': {
      return []
    }

    case 'CREATE_LOCATION_REQUEST': {
      const { payload } = action
      return loop(state, Cmd.run(sideeffects.createLocation, {
        args: [ payload ],
        successActionCreator: actions.createLocationSuccess,
        errorActionCreator: actions.createLocationFailure
      }))
    }

    case 'CREATE_LOCATION_SUCCESS': {
      return [ ...state, action.payload ]
    }

    case 'CREATE_LOCATION_FAILURE': {
      return []
    }

    case 'UPDATE_LOCATION_REQUEST': {
      const { payload } = action
      return loop(state, Cmd.run(sideeffects.updateLocation, {
        args: [ payload.id, payload ],
        successActionCreator: actions.updateLocationSuccess,
        errorActionCreator: actions.updateLocationFailure
      }))
    }

    case 'UPDATE_LOCATION_SUCCESS': {
      const { data } = action.payload
      const newState = state.map((item) => {
        if (item.id !== data.id) {
          return item
        }

        return data
      })

      return [...newState]
    }

    case 'UPDATE_LOCATION_FAILURE': {
      return []
    }

    case 'DELETE_LOCATION_REQUEST': {
      const { payload } = action
      return loop(state, Cmd.run(sideeffects.deleteLocation, {
        args: [ payload ],
        successActionCreator: actions.deleteLocationSuccess,
        errorActionCreator: actions.deleteLocationFailure
      }))
    }

    case 'DELETE_LOCATION_SUCCESS': {
      const { locationId } = action.payload
      return [...state].filter(item => item.id !== parseInt(locationId))
    }

    case 'DELETE_LOCATION_FAILURE': {
      return []
    }

    default: {
      return state
    }
  }
}

const LoadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_LOCATION_REQUEST':
    case 'CREATE_LOCATION_REQUEST':
    case 'DELETE_LOCATION_REQUEST': {
      return true
    }

    case 'FETCH_LOCATION_SUCCESS':
    case 'FETCH_LOCATION_FAILURE':
    case 'CREATE_LOCATION_SUCCESS':
    case 'CREATE_LOCATION_FAILURE':
    case 'DELETE_LOCATION_SUCCESS':
    case 'DELETE_LOCATION_FAILURE': {
      return false
    }

    default: {
      return state
    }
  }
}

const EditModeReducer = (state = false, action) => {
  switch (action.type) {
    case 'SWITCH_EDIT_MODE': {
      return action.payload
    }

    default: {
      return state
    }
  }
}

export default combineReducers({
  locationData: LocationReducer,
  loading: LoadingReducer,
  editMode: EditModeReducer
})
