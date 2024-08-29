import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      
      const product = state.products.find((item) => item.id === action.payload.id&&
      item.size === action.payload.size);
      if(product){
        product.quantity+=action.payload.quantity;
        state.total += action.payload.price * action.payload.quantity;
      }else{
        state.quantity += 1;
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      }
        
      
      
    },
    addPro: (state, action) => {
      const product = state.products.find((item) => item.id === action.payload.id
      &&
      item.size === action.payload.size);
      if (product) {
        product.quantity +=1
        state.total += action.payload.price ;
      }
    },
    removeProduct: (state, action) => {
      const product = state.products.find((item) => item.id === action.payload.id&&
      item.size === action.payload.size);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
          state.total -= action.payload.price ;
        } else {
          state.products = state.products.filter((item) => (item.id !== action.payload.id||
            item.size !== action.payload.size))
          state.total -= action.payload.price ;
        }
      }
    },
   
  },
});

export const { addProduct,addPro,removeProduct } = cartSlice.actions;
export default cartSlice.reducer;