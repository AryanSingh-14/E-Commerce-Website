import { useState } from "react";
import styled from "styled-components";
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(rgba(0, 0, 0, 0.5),
      rgba(0,0, 0, 0.5)) , url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
    display: flex;
  align-items: center;
  justify-content: center;
    
`

const Wrapper = styled.div`

    width:47%;
   padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
   
`
const Title = styled.h1`
    margin-bottom: 20px;
    font-weight: 300;
    
     letter-spacing: 3px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Input = styled.input`
    width: 70%;
    padding: 10px;
    margin: 10px;
    border: 1px solid rgba(126, 13, 111, 0.5);
   
`
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 15px;
//   text-decoration: underline;
//   cursor: pointer;
//   color: rgb(68, 2, 59);
// `;

export default function Register() {
    const navigate=useNavigate()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const res=await axios.post("https://e-commerce-api-1-oj17.onrender.com/api/auth/register",{name,username,password,email})
        if(res.status===201){
            setPassword("")
            setUsername("")
            setEmail("")
            setName("")
            navigate("/login")

        }
    }

    return (
        <Container>
            <Wrapper>
                <Title>Register Here</Title>
                <Form onSubmit={handleSubmit}>
                    <Input placeholder="Name" name="name" value={name} onChange={(e)=>(setName(e.target.value))}/>
                    <Input placeholder="E-mail" name="email" value={email} onChange={(e)=>(setEmail(e.target.value))}/>
                    <Input placeholder="Username" name="username" value={username} onChange={(e)=>(setUsername(e.target.value))}/>
                    <Input placeholder="Password" name="password" type="password" value={password} onChange={(e)=>(setPassword(e.target.value))}/>
                    <Input placeholder="Confirm Password" />
                    <Agreement> By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                        <Button type="submit">CREATE</Button>
                        
                </Form>
                <Link to="/">ALREADY A USER?</Link>
            </Wrapper>
        </Container>
    )
}
