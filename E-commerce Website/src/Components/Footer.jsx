import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { MailOutline, Phone } from '@mui/icons-material';
import { mobile } from '../responsive';
const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:"column"})}
`
    

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Des = styled.p`
     margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;

`

const Right = styled.div`
    flex: 1;
  padding: 20px;
  ${mobile({backgroundColor:"#fadada"})}
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  `
  const Payment = styled.img`
  width: 70%;
`;
export default function Footer() {
    return (
        <Container>
            <Left>
                <Logo />
                <Des>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quod fuga assumenda ab facere voluptates, ratione officiis laborum! Nam alias quisquam, recusandae doloribus quaerat porro ut placeat necessitatibus quasi officia?</Des>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <TwitterIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>

            </Center>
            <Right>

                <Title>Contact</Title>
                <ContactItem>
                   <FmdGoodOutlinedIcon style={{ marginRight: "10px" }}/> 62 Chowbazaar Path , Kolkata 700018
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +1300-023-6574
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> contactstylehub@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>

        </Container>
    )
}
