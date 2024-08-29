import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import {Link} from "react-router-dom"
const Container=styled.div`
    height:70vh;
    flex: 1;
    margin: 3px;
    position: relative;
`
const Image=styled.img`
    height:100%;
    width: 100%;
    object-fit: cover;
    ${mobile({height:"40vh",objectFit:"cover"})}
`
const Info=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    /* background-color: black; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title=styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Btn=styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`

export default function CategoryItem(props) {
  return (
   <Container>
   <Link to={`/products/${props.item.cat}`}>
      <Image src={props.item.img}/>
      <Info>
      <Title>{props.item.title}</Title>
      <Btn>SHOP</Btn>
      </Info>
      </Link>
   </Container>
  )
}
