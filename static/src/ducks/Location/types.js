// @flow

export type FetchLocationRequest = {|
  type: 'FETCH_LOCATION_REQUEST'
|}

export type FetchLocationSuccess = {|
  type: 'FETCH_LOCATION_SUCCESS',
  payload: Array<{
    id: number,
    name: string,
    description: string
  }>
|}

export type FetchLocationFailure = {|
  type: 'FETCH_LOCATION_FAILURE',
  payload: Object
|}

export type CreateLocationRequest = {|
  type: 'CREATE_LOCATION_REQUEST',
  payload: {
    name: string,
    description: string
  }
|}

export type CreateLocationSuccess = {|
  type: 'CREATE_LOCATION_SUCCESS',
  payload: Array<{
    id: number,
    name: string,
    description: string
  }>
|}

export type CreateLocationFailure = {|
  type: 'CREATE_LOCATION_FAILURE',
  payload: Object
|}

export type UpdateLocationRequest = {|
  type: 'UPDATE_LOCATION_REQUEST',
  payload: {
    id: number,
    name: string,
    description: string
  }
|}

export type UpdateLocationSuccess = {|
  type: 'UPDATE_LOCATION_SUCCESS',
  payload: Object
|}

export type UpdateLocationFailure = {|
  type: 'UPDATE_LOCATION_FAILURE',
  payload: Object
|}

export type SwitchEditMode = {|
  type: 'SWITCH_EDIT_MODE',
  payload: Boolean
|}

export type DeleteLocationRequest = {|
  type: 'DELETE_LOCATION_REQUEST',
  payload: number
|}

export type DeleteLocationSuccess = {|
  type: 'DELETE_LOCATION_SUCCESS',
  payload: number
|}

export type DeleteLocationFailure = {|
  type: 'DELETE_LOCATION_FAILURE',
  payload: Object
|}
