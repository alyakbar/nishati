// import styled from "styled-components";
// import { popularProducts } from "../data";
// import Product from "./Product";

// const Container = styled.div`
//     padding: 20px;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
// `;

// const Products = () => {
//   return (
//     <Container>
//       {popularProducts.map((item) => (
//         <Product item={item} key={item.id} />
//       ))}
//     </Container>
//   );
// };

// export default Products;



import React from 'react'
import css from './Product.module.css'


const Product = ({item}) => {
  return (
    <div className={css.contai}>
        {/* <img src={item.img}/> */}
        
        <div className="info">
            <div className="title">{item.title}</div>
            <div className="button"><button>Buy Now</button></div>
        </div>

      
    </div>
  )
}
 
export default Product
