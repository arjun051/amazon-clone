import Home from '@mui/icons-material'
import React, { useEffect } from 'react'
import Header from './Header'
import Homepage from './Homepage'
import Login from './Login'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Cart from './Cart'
import Payment from './Payment'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { display } from '@mui/system'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51O1EHLSHauNfAME7sK1ZHPlFofX4OF0MslA59347Lavhn4D4BSlwwxWKAWPSABOK0AYtIxima9McPtBad6d9aMFb004JYMxNHy')
function App() {

  //data layer functioality
  const [{basket} , dispatch] = useStateValue()

  //to keep note of who is logged in currently
  useEffect( () => { auth.onAuthStateChanged(authUser =>{
    if(authUser){
      dispatch({
        type : 'SET_USER',
        user: authUser

      })
    }
    else {
      dispatch({
        type : 'SET_USER',
        user : null
      })
    }
  }) } ,[])

  return (
    <Router>
    <div className='app'>
{/* These are updates ;) */}

      <Routes> 
        <Route path='/login' element = {[<Login/>]}/>
        < Route path='/cart'element = {[<Header/>,<Cart/>]} />
        

        <Route path ='/payment' element =  {[<Elements stripe ={promise}><Payment/></Elements>]} />
        
      
        <Route path='/' element={[<Header/> ,<Homepage/>]}/>

      </Routes>
    </div>
    </Router>
  )
}

export default App
