import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Label from 'views/components/atoms/Label'
import Input from 'views/components/atoms/Input'
import Textarea from 'views/components/atoms/Textarea'

import Location from 'ducks/Location'

const mapDispatchToProps = {
  switchEditMode: Location.actions.switchEditMode,
  updateLocation: Location.actions.updateLocationRequest
}

const Wrapper = styled.div``

type Props = {
  id?: string,
  type?: string,
  label?: string,
  onSubmit?: Function
}

type State = {
  id: number,
  name: string,
  description: string
}

class FormLocationEdit extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      id: 0,
      name: '',
      description: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.setState({
      id: this.props.location.id,
      name: this.props.location.name,
      description: this.props.location.description
    })
  }

  handleInputChange: Function
  handleInputChange (event: any) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.updateLocation(this.state.id, this.state)
    this.props.switchEditMode(false)

    this.setState({
      id: 0,
      name: '',
      description: ''
    })
  }

  render () {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Edit location</legend>
            <div>
              <Label>Name</Label>
              <Input name='name' type='text' value={this.state.name} onChange={this.handleInputChange} />
            </div>
            <div>
              <Label>Description</Label>
              <Textarea name='description' value={this.state.description} onChange={this.handleInputChange} />
            </div>
            <button type='submit'>Send</button>
          </fieldset>
        </form>
      </Wrapper>
    )
  }
}

export default connect(null, mapDispatchToProps)(FormLocationEdit)
