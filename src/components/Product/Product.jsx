
// import styled from "styled-components";



// const Product = ({ item }) => {
//   return (
// <div>new</div>
//   );
// };

// export default Product;
import React from 'react'
import { categories } from "../MockData";
import Products from './Products';
import css from './Product.module.css'

const Product = () => {
  return (
    <div className={css.contain}>
    {categories.map((item) => (
        <Products item={item} key={item.id} />
      ))}
      
    </div>
  )
}

export default Product
