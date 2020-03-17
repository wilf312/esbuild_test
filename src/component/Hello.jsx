import * as React from 'react'
import styled from 'styled-components'

const Wrap = styled.div `
  background: #ffe6e6;
  border-radius: 6px;
`

const Title = styled.h1 `
  font-size: 22px;
`

export const Hello = () => {
  return <Wrap>
    <Title>Hello World!</Title>
  </Wrap>
}