import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../responsive';
const Container=styled.div`
    height: 60vh;
    background-color: #f8e7e7;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const Title=styled.h1`
margin-bottom: 20px;
font-size: 70px;
`
const Des=styled.div`
     font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({textAlign:"center"})}
`

const InputContainer=styled.div`
    width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({width:"80%"})}
`
const Input=styled.input`
    border: none;
  flex: 9;
  padding-left: 20px;
  font-size: 18px;
  font-weight: bold;
`
const Btn=styled.button`
flex: 1;
  border: none;
  background-color: teal;
  color: white;
`


 const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Des>
        Get timely updates from your favorite products.
        </Des>
        <InputContainer>
        <Input placeholder="Your email"/>
        <Btn><SendIcon/></Btn>
        </InputContainer>
    </Container>
  )
}
export default Newsletter;
