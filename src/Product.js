import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product({id,title,image,price,rating}) {

  const [ {basket} ,dispatch] = useStateValue();

  //Pushing the data into data-layer
  const addtobasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id : id,
        title : title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }



  return (
    <div className="items">
    
        <p>{title}</p>
         
       
        <div className="price">
        <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product-rating">
          {Array(rating)
          .fill()
          .map((_,i) => (
            <p>⭐️</p>
          ))
          }
        </div>
          <img className="product-img" src={image} alt="" />   
        <button className='buy-button' onClick={addtobasket}>
            Add to Basket
        </button>
        

      </div>
  )
}

export default Product