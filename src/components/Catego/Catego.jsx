
import React from 'react'
import { categories } from "../MockData";
import CategoItem from './CategoItem';
import css from './catego.module.css'

const Catego = () => {
  return (
    <div className={css.contain}>
    {categories.map((item) => (
        <CategoItem item={item} key={item.id} />
      ))}
      
    </div>
  )
}

export default Catego
