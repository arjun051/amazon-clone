import React from 'react'
import './Cart.css'
import { useStateValue } from './StateProvider'
import {getBasketTotal} from './reducer'
import CheckoutProduct from './CheckoutProduct'
import Payment from './Payment'
import { useNavigate } from 'react-router-dom'
function Cart() {

    const [{basket} , dispatch] = useStateValue()
    const navigate = useNavigate()
  return (
    <div className='cart'>
        <div className="cart-home">
        <div className="cart-left">
            <div className="row1">
                    <h1>Shopping Cart</h1>
                    <a href="">Deselect all items</a>
                    <hr />

            {basket.map(item => (
                <CheckoutProduct
                    id= {item.id}
                    image = {item.image}
                    title = {item.title}
                    price = {item.price}
                    rating = {item.rating}
                />
            ))}
       



                    
                    <hr/>
                    <div className="product-footer">
                        Subtotal({basket.length} items) :
                        <small>$</small> 
                    {(getBasketTotal(basket)).toFixed(2)}
                         
                    </div>
            </div>




            <div className="row2">
                <h2>Your Items</h2>
                <hr/>
                <p>No items to buy</p>
            </div>
            <h4>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.<br/>
Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</h4>
        </div>





        <div className="cart-right">
            <div className="cart-value">
                <h4>Your order is eligible for FREE Delivery.</h4>
                <div className="cart-right-subtotal">
                    <h2>Subtotal({basket.length} items) : <small>$</small> <strong>
                    {(getBasketTotal(basket)).toFixed(2)}


                        </strong></h2>
                </div>
               <div className="cart-right-checkbox">
               <input type="checkbox" name="" id="" />
                <h4>This order contains a gift.</h4>
               </div>

                <div className="cart-right-buy-bttn">
                    
                   
                    <button onClick={e => 
                        navigate('/payment')
                    }>
                        Proceed to Checkout
                    </button>


                </div>
                
                <select className='cart-right-emi'>
                    <option  value="">
                        EMI Available
                    </option>
                </select>
            </div>
         
        </div>
        </div>
    </div>
  )
}

export default Cart