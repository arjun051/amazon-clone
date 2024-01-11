import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'

function Header() {
 
  const [{basket , user} , dispatch] = useStateValue()


  //sign out firebase functionality
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }


  return (
    <div className="header">
      <Link to={"/"}>
      <img className='header-logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      </Link>
      {/* <div className="header-container"> */}
      

      <div className="header-search">
        
          <select className='header-search-dropdown'>
            <option value="">All</option>
          </select>
          <input className="header-search-text" type="text" />
          <div className="header-icon">
          <SearchIcon/>
          </div>


      </div>

      <div className="header-nav">
        <Link to= {!user && "/login"}>
        <div onClick={handleAuthenticaton } className="header-options">
          <span className='header-options-line1'>Hello</span>
          <span className='header-options-line2'>{user ? 'Sign out' : 'Sign in'}</span>
        </div>
          </Link>
        <div className="header-options">
          <span className='header-options-line1'>Returns</span>
          <span className='header-options-line2'>orders</span>
        </div>
        <div className="header-options">
          <span className='header-options-line1'>your</span>
          <span className='header-options-line2'>prime</span>
        </div>
        
        <Link to={"/cart"}>
        <div className="header-option-basket">         
          <ShoppingBasketIcon/>
          <span className='header-options-line2 basket-count'>{basket?.length}</span>
        </div>
        </Link>
        
      </div>
      {/* </div> */}
    </div>

  )
}

export default Header
