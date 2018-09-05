import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Label from 'views/components/atoms/Label'
import Input from 'views/components/atoms/Input'
import Textarea from 'views/components/atoms/Textarea'

import Location from 'ducks/Location'

const mapDispatchToProps = {
  createLocation: Location.actions.createLocationRequest
}

const Wrapper = styled.div``

type Props = {
  id?: string,
  type?: string,
  label?: string,
  onSubmit?: Function
}

type State = {
  name: string,
  description: string
}

class FormLocationAdd extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      name: '',
      description: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    this.props.createLocation(this.state)

    this.setState({
      name: '',
      description: ''
    })
  }

  render () {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Add location</legend>
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

export default connect(null, mapDispatchToProps)(FormLocationAdd)
