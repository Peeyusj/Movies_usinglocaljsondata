import React from 'react'
import '../style/navbar.css'
import cart from '../assets/shopping-cart.png'
const Navbar = () => {
  return (
    <div className='maincontainer'>
      <div className="headin">Movie Theater Landing</div>
      <div className="navlinksouter">
      <div className="navlinks"> <a href="">Home</a> </div>
      <div className="navlinks"><a href="">Movies</a></div>
      <div className="navlinks"><a href="">Calender</a></div>
      <div className="navlinks"><a href="">Movie</a></div>
      <div className="navlinks"><a href="">Membership</a></div>
      <div className="navlinks"><a href="">Contact</a></div>
      <div className="navlinks"><a href="">About</a></div>
      <div className="navlinks"><a href="">Loading</a></div>
      <div className="navlinks"><img src={cart} alt="" width={"20px"} height="20px"/></div>
    
      </div>
      </div>
  )
}

export default Navbar
