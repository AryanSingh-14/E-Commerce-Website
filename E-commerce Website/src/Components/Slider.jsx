import styled from "styled-components";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import  {sliderItems}  from "../data";
import { useState } from "react";
import { mobile } from "../responsive";
const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display:"none"})}
 `


const Arrow = styled.div`
width:50px;
height:50px;
border-radius: 50%;
background-color: #f1f0cf;
display: flex;
align-items :center ;
justify-content: center;
position:absolute;
top: 0;
bottom: 0; 
margin: auto;
left:${(props) => props.$pointing === "left" && "10px"};
right:${(props) => props.$pointing === "right" && "10px"};
cursor: pointer;
opacity:0.5;
z-index:2;
 `
const Wrapper = styled.div`
 height:100%;
display: flex;

/* transition: all 1.4s ease; */
transform: translateX(${props=>props.$index*-100}vw);
 `
const Slide = styled.div`
height: 100vh;
width: 100vw;
display: flex;
background-color:#${(props)=>props.$bg};
align-items: center;
justify-content: center;
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    /* background-color:black; */
    display: flex;
    align-items: center;
    justify-content: center;
`


const Image = styled.img`
height: 80%;
background-color: transparent;
`

const InfoContainer = styled.div`
    height: 100%;
    flex: 1;
    padding: 50px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    font-size: 20px;
    margin:50px 0;
    font-weight: 500;
    letter-spacing: 3px;
`
const Btn = styled.button`
   padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
   const [slideIndex,setIndex]=useState(0)
    const handleClick=(direction)=>{
        if(direction==="left")
        {
            setIndex( slideIndex>0? slideIndex-1 : 2)
        }else{
            setIndex( slideIndex<2? slideIndex+1 : 0)
        }
    }
    return (
        <Container>

            <Arrow $pointing="left" onClick={()=>handleClick("left")}>
                <ArrowLeftIcon />
            </Arrow>
           <Wrapper $index={slideIndex}>
                {sliderItems.map((item)=>(
                <Slide $bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}></Image>
                    </ImgContainer>

                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Btn>Shop Now</Btn>

                    </InfoContainer>

                </Slide >
                 ))}
                
                
                </Wrapper>
            <Arrow $pointing="right" onClick={()=>handleClick("right")}>
                <ArrowRightIcon />
            </Arrow>

        </Container>
    )
}
export default Slider;
