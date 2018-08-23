// @flow

import * as React from 'react'
import styled from 'styled-components'

import PageWrapper from 'views/components/atoms/PageWrapper'
import Content from 'views/components/atoms/Content'
import H1 from 'views/components/atoms/H1'

const Wrapper = styled.div``

class Home extends React.PureComponent<Object> {
  render () {
    return (
      <PageWrapper>
        <Content>
          <Wrapper>
            <H1>Food Out App</H1>
          </Wrapper>
        </Content>
      </PageWrapper>
    )
  }
}

export {
  Home as default
}
