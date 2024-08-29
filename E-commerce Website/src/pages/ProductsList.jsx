import React from 'react'
import styled from 'styled-components';
import Announcement from "../Components/Announcement";
import Navbar from "../Components/Navbar.jsx";
import Products from '../Components/Products.jsx';
import Newsletter from '../Components/Newsletter.jsx';
import Footer from '../Components/Footer.jsx';
import { useLocation } from "react-router";
import { useState } from "react";


const Container=styled.div`
    
`
const Title=styled.h1`
    margin: 20px;
    letter-spacing: 3px;
`
const FilterContainer=styled.div`
  display: flex;
  justify-content:space-between;
`

const Filter=styled.div`
  display: flex;
  margin: 20px;
  font-size: 20px;
  align-items: center;
  justify-content: center;
`
const FilterText=styled.div`
font-size: 20px;
/* letter-spacing: 1px; */
margin-right: 20px;
font-weight: 600;
`
const Select=styled.select`
     padding: 10px;
  margin-right: 20px;
`
const Option=styled.option`
    
`

const ProductsList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
  
    <Container>
    <Announcement/>
    <Navbar/>
    <Title>{cat}</Title>
    <FilterContainer>
        <Filter>
            <FilterText>Filter Product:</FilterText>
            <Select name="Color" onChange={handleFilters}>
            <Option disabled >Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            </Select>
            <Select name="Size" onChange={handleFilters}>
            <Option disabled >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
        <FilterText>Sort Product:</FilterText>
        <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
        
    </FilterContainer>
    <Products cat={cat} filters={filters} sort={sort}/>
    <Newsletter/>
    <Footer/>
    </Container>
    
  )
}
export default ProductsList;
