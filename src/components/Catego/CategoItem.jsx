import React from 'react'
import css from './categoItem.module.css'

const CategoItem = ({item}) => {
  return (
    <div className='contai'>
        {/* <Image src={item.img}/> */}
        <div className="info">
            <div className="title">{item.title}</div>
            <div className="button"><button>Buy Now</button></div>
        </div>

      
    </div>
  )
}

export default CategoItem
