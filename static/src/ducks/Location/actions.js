// @flow

import * as types from './types'

export const fetchLocationRequest = (): types.FetchLocationRequest => {
  return {
    type: 'FETCH_LOCATION_REQUEST'
  }
}

export const fetchLocationSuccess = ({ data }: Object): types.FetchLocationSuccess => {
  return {
    type: 'FETCH_LOCATION_SUCCESS',
    payload: data
  }
}

export const fetchLocationFailure = (error: Object): types.FetchLocationFailure => {
  return {
    type: 'FETCH_LOCATION_FAILURE',
    payload: error
  }
}

export const createLocationRequest = (data: { name: string, description: string}): types.CreateLocationRequest => {
  return {
    type: 'CREATE_LOCATION_REQUEST',
    payload: data
  }
}

export const createLocationSuccess = ({ data }: Object): types.CreateLocationSuccess => {
  return {
    type: 'CREATE_LOCATION_SUCCESS',
    payload: data
  }
}

export const createLocationFailure = (error: Object): types.CreateLocationFailure => {
  return {
    type: 'CREATE_LOCATION_FAILURE',
    payload: error
  }
}

export const updateLocationRequest = (id: number, data: Object): types.UpdateLocationRequest => {
  return {
    type: 'UPDATE_LOCATION_REQUEST',
    payload: data
  }
}

export const updateLocationSuccess = (data: Object): types.UpdateLocationSuccess => {
  return {
    type: 'UPDATE_LOCATION_SUCCESS',
    payload: data
  }
}

export const updateLocationFailure = (error: Object): types.UpdateLocationFailure => {
  return {
    type: 'UPDATE_LOCATION_FAILURE',
    payload: error
  }
}

export const switchEditMode = (mode: Boolean): types.SwitchEditMode => {
  return {
    type: 'SWITCH_EDIT_MODE',
    payload: mode
  }
}

export const deleteLocationRequest = (locationId: number): types.DeleteLocationRequest => {
  return {
    type: 'DELETE_LOCATION_REQUEST',
    payload: locationId
  }
}

export const deleteLocationSuccess = (locationId: number): types.DeleteLocationSuccess => {
  return {
    type: 'DELETE_LOCATION_SUCCESS',
    payload: locationId
  }
}

export const deleteLocationFailure = (error: Object): types.DeleteLocationFailure => {
  return {
    type: 'DELETE_LOCATION_FAILURE',
    payload: error
  }
}
