import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h2>Echom</h2>
            <p>Echom is a voice-enabled e-commerce platform designed to empower visually impaired individuals by enabling them to order groceries independently through voice commands. Instead of navigating a traditional product catalog, users interact with a voice assistant that helps them add items to their cart and proceed to checkout seamlessly</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>8637677387</li>
                <li>snegaofficialk@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © Echom.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
