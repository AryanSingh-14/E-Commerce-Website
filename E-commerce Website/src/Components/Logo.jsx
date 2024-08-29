import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
const Container=styled.h1`
    font-weight: bold;
    letter-spacing: 3px;
    ${mobile({fontSize:"19px",letterSpacing:"0"})}
`
export default function Logo() {
  return (
    <Container>
        StyLe huB
    </Container>
  )
}
