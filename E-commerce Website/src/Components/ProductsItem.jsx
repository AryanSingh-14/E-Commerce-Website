
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';

const Info=styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.2);
  opacity: 0;
  
`
const Container=styled.div`
    min-width: 250px;
  height: 300px;
    flex: 1;
    margin: 15px;
    position: relative;
    display: flex;
    align-items: center;
  justify-content: center;
    background-color: #ebf3f7 ;
    &:hover ${Info}{
         opacity:1;
    }

    
`
const Image=styled.img`
    height:90%;
    /* z-index: 2; */
    /* background-color: black; */
    object-fit: contain;
`

const Icon=styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`
const Price=styled.div`
  background-color: #ebf3f7;
  color: black;
  font-size: 25px;
  padding: 10px;
  text-align: center;
  border: 1px solid black;
`
const Table=styled.div`
  
`

const ProductsItem = (props) => {
 
  return (
    <Table>
    <Container>
      
        <Image src={props.item.image}/>
        <Info>
          <Icon><ShoppingCartOutlinedIcon /></Icon>
        
        <Icon>
          <Link to={`/product/${props.item._id}`}>
          <SearchIcon />
          </Link>
          </Icon>
        
        <Icon><FavoriteBorderOutlinedIcon/></Icon>
        
        </Info>
       

    </Container>
    <Price>₹ {props.item.price}</Price>
    </Table>
  )
}
export default ProductsItem;
