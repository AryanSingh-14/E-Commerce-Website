import React from 'react'
import styled from "styled-components"
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Logo from './Logo';
import {mobile} from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {clearUser} from '../redux/userRedux'

const Container = styled.div`
height: 60px;
background-color:#f1f0cf;
${mobile({height:"55px",margin:"0px"})}
`

const Wrapper = styled.div`
    padding:10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding:"10px 0"})} 
`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
   
`
const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}
`
const SearchContainer = styled.div`
    border: 1px solid whitesmoke;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    background-color: white;
    ${mobile({padding:"0"})}
`
const Input = styled.input`
  border: none;
  ${mobile({width:"50px"})}
`
const Center = styled.div`
    
    flex:1;
    text-align: center;
    ${mobile({textAlign:"end"})}
`

const Right = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:1.8,justifyContent:"center"})}

`
const MenuItem = styled.div`
  font-size: 16px;
  color:black;
  border:2px solid black;
  padding: 2px;
  cursor: pointer;
  margin-left: 30px;
  ${mobile({fontSize:"12px",marginLeft:"10px"})}
`



const Navbar = () => {
  
  const dispatch=useDispatch()
  
  const handleLogout=()=>{
    //  localStorage.removeItem('persist:root')
   
     dispatch(clearUser())
     
    
   }
  const quantity=useSelector(state=>state.cart.products.length)
  
  return (
    <Container>
      <Wrapper>
        <Left>
        <MenuItem onClick={handleLogout}> LOGOUT</MenuItem>
        </Left>
        <Center><Logo/></Center>
        <Right>
   
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon/>
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>


    </Container>
  )
}

export default Navbar
