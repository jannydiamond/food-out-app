// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import PageWrapper from 'views/components/atoms/PageWrapper'
import Content from 'views/components/atoms/Content'
import H1 from 'views/components/atoms/H1'
import FormLocationAdd from 'views/components/organisms/FormLocationAdd'
import FormLocationEdit from 'views/components/organisms/FormLocationEdit'

import Location from 'ducks/Location'

const mapStateToProps = (state: Object) => {
  return {
    locationData: Location.selectors.getLocationData(state),
    loading: Location.selectors.getLoading(state),
    editMode: Location.selectors.getEditMode(state)
  }
}

const mapDispatchToProps = {
  fetchLocation: Location.actions.fetchLocationRequest,
  updateLocation: Location.actions.updateLocationRequest,
  switchEditMode: Location.actions.switchEditMode,
  deleteLocation: Location.actions.deleteLocationRequest
}

const Wrapper = styled.div``

const renderLocations = (locations, editHandler, deleteHandler) => locations.map((location) => (
  <li key={location.id}>
    {location.name}<br />
    {location.description}<br />
    <button type='button' onClick={editHandler} data-location={location.id}>Edit</button>
    <button type='button' onClick={deleteHandler} data-location={location.id}>Delete</button>
  </li>
))

type State = {
  locationToUpdate: Object
}

class Home extends React.PureComponent<Object, State> {
  constructor (props) {
    super(props)

    this.state = {
      locationToUpdate: {}
    }

    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  componentDidMount () {
    this.props.fetchLocation()
    this.props.switchEditMode(false)
  }

  handleEditClick: Function
  handleEditClick (event) {
    const locations = this.props.locationData
    const locationId = parseInt(event.target.dataset.location)
    this.props.switchEditMode(true)
    this.setState({
      locationToUpdate: locations.filter(location => location.id === locationId)
    })
  }

  handleDeleteClick: Function
  handleDeleteClick (event) {
    const locationId = parseInt(event.target.dataset.location)
    this.props.deleteLocation(locationId)
  }

  render () {
    return (
      <PageWrapper>
        <Content>
          <Wrapper>
            <H1>Food Out App</H1>
            <p>{this.props.loading ? 'loading...' : 'not loading'}</p>
            <ul>
              { renderLocations(this.props.locationData, this.handleEditClick, this.handleDeleteClick) }
            </ul>
            { this.props.editMode ? <FormLocationEdit location={this.state.locationToUpdate[0]} /> : null }
            <FormLocationAdd />
          </Wrapper>
        </Content>
      </PageWrapper>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
