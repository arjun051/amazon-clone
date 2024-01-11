import React from 'react'

import './Homepage.css'
import Product from './Product'
function Home() {
  return (
    <div className='home-container'>
        <div className="home">
        <img className='home-img' src="https://i.pcmag.com/imagery/articles/07sENLKoowkVRwbpLcDGrxv-49..v1688238658.jpg" alt="" />
      
      <div className="row">
     
      <Product
      title= "Redgear Cosmo 7,1 Usb Gaming Wired Over Ear Headphones With Mic With Virtual Surround Sound,50Mm Driver, Rgb Leds & Remote Control(Black)"
      image= "https://m.media-amazon.com/images/I/41Gt21tmhTL._SX300_SY300_QL70_FMwebp_.jpg"
      price={60.99}
      rating={4}
      />
      
      <Product
      title = "boAt Airdopes 170 TWS Earbuds with 50H Playtime, Quad Mics ENx™ Tech, Low Latency Mode, 13mm Drivers, ASAP™ Charge, IPX4, IWP™, Touch Controls & BT v5.3(Classic Black)"
      
      image="https://m.media-amazon.com/images/I/51YOeZehIKL._SL1500_.jpg"
      price={20.99}
      rating = {5}/>
      <Product
      title = "beatXP Tune XPods Bluetooth True Wireless Ear Buds with 50H Playtime, Quad Mic ENC Tech, Low Latency, Type C Earphone with 10mm Drivers, IPX5 Water Resistance, BT 5.3, Touch Control (Black)"
      
      
      image="https://m.media-amazon.com/images/I/61e9ssPLOVL._SX679_.jpg"
      price={10.99}
      rating = {4}
      />
  
  



      <Product
      title = "TITACUTE USB C Headphone for Samsung S21 S20 FE S22 A53 Wired Earbuds Magnetic in-Ear Type C Earphone with Microphone Volume Control Bass Stereo Noise Canceling for Galaxy Z Flip 3 4 Pixel 6 7 OnePlus"
      
      
      
      image="https://m.media-amazon.com/images/I/61HJAUYKfPL._SY879_.jpg"
      price={30.99}
      rating = {5}/>

      </div>

      

      <div className="row">
      <Product
      title = "boAt Wave Sigma Smartwatch with 2.01 HD Display,Bluetooth Calling, Coins, DIY Watch Face Studio, 700+ Active Modes, HR&SpO2 Monitoring, Energy and Sleep Scores,IP67(Jade Purple)"
      
      image="https://m.media-amazon.com/images/I/71QLEyXTHoL._SL1500_.jpg"
      price={179.50}
      rating = {5}
      />
      <Product
      title = "Echo Dot (3rd Gen) - Smart speaker with Alexa (Black)"
      
      image="https://m.media-amazon.com/images/I/41BsHIgteaL.jpg"
      price={79.99}
      rating = {3}/>
      <Product
      title = "Cezo 40X60 Magnification Zoom HD,Monocular Telescope for Adults and Children,High Power Telescope Gadget,Outdoor Telescope with Built-in Compass"
      
      image="https://m.media-amazon.com/images/I/41ojjhtetAL._SX300_SY300_QL70_FMwebp_.jpg"
      price={299.99}
      rating = {3}/>
      </div>
      {/* Product */}
      

      <div className="row">
      <Product
      title="Samsung 214 cm (85 inches) 8K Ultra HD Smart Neo QLED TV QA85QN900CKXXL (Titan Black)
      "
      image="https://m.media-amazon.com/images/I/91RnDCyguML._SX679_.jpg"
      price = {14999.99}
      rating = {5}
      />

      </div>
      {/* produxt */}

      </div>
    </div>
  )
}

export default Home
