
import {css} from "styled-components";


export const mobile=(props)=>{
    return css`//here we are using css of styled components.....basically this method will return the css passed to it as props
     @media only screen and (max-width:380px){
    ${props}
  }
    `
}

