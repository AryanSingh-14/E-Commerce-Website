import React, {useEffect, useState } from 'react';
import styled from 'styled-components';
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import StripeCheckout from "react-stripe-checkout"
import {userRequest} from "../requestMethods"
import { useNavigate } from "react-router-dom";
import {addPro,removeProduct} from '../redux/cartRedux';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


const KEY=import.meta.env.REACT_APP_STRIPE;
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 50px;
  
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  letter-spacing: 3px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 20px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  

`;

const CartProduct = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
 
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
 
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;

`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

// const Delete=styled.button`
//   background: red;
// color: white;
// border: none;
// cursor: pointer;
// padding: 5px 10px;
// border-radius: 5px;
// font-size: 14px;
// align-self: center;
// margin-left: 10px;
// `

export default function Cart() {
  
  const cart=useSelector(state=>state.cart)
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
 

  const onToken = (token) => {
    console.log(token)
    setStripeToken(token);
  };

  useEffect(()=>{
const makeRequest=async ()=>{
  try{
const res=await userRequest.post("/checkout/payment",{
  tokenId:stripeToken.id,
  amount:cart.total*100
})

navigate("/success",{stripeData:res.data,products:cart});
  }
  catch(err){
    console.log(err)
  }
  
}
stripeToken &&  makeRequest()
  },[stripeToken,cart.total,history])

 
// const makePayment=async()=>{
// const stripe=loadStripe("pk_test_51P53RmSH1ygiMgMRRZsIadpcXABme5FRyFfneU0rtBMl8aoVVclaT9wVsSlbjXmzCZySBldprLiqthE8CPOjIpn800d58yda2D")

// const body={
//   products:cart
// }
// const headers={
//   "Content-Type":"application/json"
// }

// const response=await fetch('http://localhost:5000/api/checkout/payment',{
//   method:"POST",
//   headers:headers,
//   body:JSON.stringify(body)
// })
// const session=await response.json()

// const result=stripe.redirectToCheckout({
//   sessionId:session.id
// })
// if(result.error){
//   console.log(result.error)
// }
const dispatch = useDispatch();
const handleAddQuantity = (product) => {
  dispatch(addPro({ id:product.id,price:product.price,size:product.size}));
};

const handleRemoveQuantity = (product) => {
  dispatch(removeProduct({ id:product.id,price:product.price ,size:product.size}));
};


  return (
    <Container>
    <Announcement/>
    <Navbar/>
    <Wrapper>
         <Title>Your Bag</Title>
         <Top>
          <Link to="/"> <TopButton>CONTINUE SHOPPING</TopButton></Link>
            
            <TopTexts>
                <TopText>Shopping Bag({cart.products.length})</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
         </Top>
         <Bottom>
            <CartProduct>
            {cart.products.map((product) => (
            <Product>
              <ProductDetail>
                <Image src={product.image} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {product.id}
                  </ProductId>
                  <ProductColor color= {product.color}/>
                  <ProductSize>
                    <b>Size:</b> {product.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon  onClick={()=>handleAddQuantity(product)}/>
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <RemoveIcon onClick={() => handleRemoveQuantity(product)}/>
                </ProductAmountContainer>
                <ProductPrice>Rs {product.price*product.quantity}</ProductPrice>
                
              </PriceDetail>
            </Product>
             ))}
            <Hr />
           
            </CartProduct>
            <Summary>
                 <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                 <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>Rs {cart.total}</SummaryItemPrice>
                 </SummaryItem>
                 <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Rs 100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>Rs -100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rs {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Style hUB"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey="pk_test_51P53RmSH1ygiMgMRRZsIadpcXABme5FRyFfneU0rtBMl8aoVVclaT9wVsSlbjXmzCZySBldprLiqthE8CPOjIpn800d58yda2D"
            >
            <Button >CHECKOUT NOW</Button>
            </StripeCheckout>

            </Summary>
         </Bottom>
    </Wrapper>
    <Footer/>
    </Container>
   
  )
}




