import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";
import { mobile } from "../responsive";
const Container=styled.div`
    
    display: flex;
    justify-content: space-between;
    padding: 20px;
    ${mobile({padding: "0px",flexDirection:"column"})}
`

export default function Categories() {
  return (
    <Container>
   {categories.map((category)=>(
    <CategoryItem key={category.id} item={category}/>
   ))}
   </Container>
  )
}

