import styled from "styled-components";
import ProductsItem from "./ProductsItem";
// import { popularProducts } from "../data";
import axios from "axios";
import {useState,useEffect} from "react"

const Container = styled.div`
    display: flex;
    padding: 10px;
    justify-content: space-between;
    flex-wrap: wrap;
`
const Heading = styled.h1`
  margin: 20px;
  text-align: center;
  font-weight: bolder;
  font-size: 50px; 
  
`
const Products = ({cat,filters,sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `https://e-commerce-api-1-oj17.onrender.com/api/products?category=${cat}`
            : "https://e-commerce-api-1-oj17.onrender.com/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat && setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <Container>
      
      {cat?
        filteredProducts.map((item) => 
          <ProductsItem key={item._id} item={item} />)
        :products.slice(0,7).map((item)=><ProductsItem item={item} key={item._id}/>)
      } 

      
    </Container>
  )
}
export default Products;