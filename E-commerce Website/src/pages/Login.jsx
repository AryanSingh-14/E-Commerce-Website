import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import {Link} from "react-router-dom"




const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:linear-gradient(rgba(0, 0, 0, 0.5),
      rgba(0,0, 0, 0.5)) , url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  
  `;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 2px;

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid rgba(126, 13, 111, 0.5);
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
//   color: rgb(68, 2, 59);
// `;

const Error = styled.span`
  color: red;
`;




export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  

  const handleClick = (e) => {
    
    e.preventDefault();
    login(dispatch, { username, password });
    setPassword("")
    setUsername("")
  };


  return (
      
        <Container>
          <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
              <Input placeholder="Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
              <Input placeholder="Password"name="password" type="password" value={password}
            onChange={(e) => setPassword(e.target.value)} />
              <Button onClick={handleClick}>LOGIN</Button>
             
              
              <Link to="/register">CREATE A NEW ACCOUNT</Link>
            </Form>
          </Wrapper>
        </Container>
      );
  
}
