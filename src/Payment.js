import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import './Payment.css'
import { useElements, useStripe } from '@stripe/react-stripe-js'
import { CardElement } from '@stripe/react-stripe-js'
import { useEffect ,useState } from 'react'
import { getBasketTotal } from './reducer'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'

function Payment() {
  const [{basket} , dispatch] = useStateValue()
  const navigate  = useNavigate()
  const stripe = useStripe()
  const elements = useElements()


  const [succeded , setSucceded] = useState(null)
  const [processing , setProcessing] = useState(null)
  const [error , setError] = useState(null)
  const [disabled , setDisabled] = useState(true)
  const [clientSecret , setClientSecret] = useState(true)

  useEffect(() => {
    const getClientSecret = async() => {
      const response = await axios({
        method : 'post',
        url : `payments/create?total=${getBasketTotal(basket)*100}`
      })
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret()
  } , [basket])

  const handleSubmit = async(event) => {
    event.preventDefault();
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method : {
        card: elements.getElement(CardElement)
      }
    }).then(({paymentIntent}) => {
        setSucceded(true)
        setError(null)
        setProcessing(false)

        navigate.replace('/orders')
    })
  }
  const handleChange = e => {
    setDisabled(e.empty)
    setError(e.error ? e.error.messaage : "")
  }
  return (
    <div className='payment-container'>
      <h1>Checkout</h1>
      <div className="pay-row">
        <div className="ad-title">
<h3>          Delivery Address</h3>

        </div>
        <div className="ad-info">
        <p>Qu 87-A pitampura , New delhi 110034</p>
        </div>
      </div>


      <div className="pay-row">
      <div className="rev-title">
          <h3>Review Items</h3>
      </div>
      <div className="rev-info">
      {basket.map(item => (
                <CheckoutProduct
                    id= {item.id}
                    image = {item.image}
                    title = {item.title}
                    price = {item.price}
                    rating = {item.rating}
                />
            ))}
      </div>
      </div>
      <div className="pay-row">
        <div className="pay-c1">

        <h3>Payment Details</h3>
        </div>
        <div className="pay-details">
        <form onSubmit={handleSubmit}>
        <CardElement onChange={handleChange}/>
        <button disabled={processing || disabled || succeded }>
          <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
        </button>

        {error && <div>{error}</div>}
        </form>
        </div>
        
        
      </div>
     
    </div>
  )
}

export default Payment