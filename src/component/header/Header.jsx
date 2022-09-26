import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderIcons from './HeaderIcons'
function Header() {
  return (
   <header>
    <div className="container header_conatiner">
      <h5>hello I'm</h5>
      <h1>Govind Bhatt</h1>
      <h5 className='text-light'>Fullstack Devloper</h5>
      <CTA/>
      <HeaderIcons/>

      
      <div className="me">
        <img src={ME} alt='me'/>
      </div>
      <a href='#contact' className='scroll_down'>Scroll down</a>
     
    </div>
   </header>
  )
}

export default Header
