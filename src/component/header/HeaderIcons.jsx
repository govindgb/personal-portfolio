import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai';
import {FaGithub} from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si';
import {SiGeeksforgeeks} from 'react-icons/si';
function HeaderIcons() {
  return (
    <div className='header_socials'>

      <a href='https://www.linkedin.com/in/govind-bhatt-a64b40202/' target='_blank'><AiFillLinkedin/></a>

      <a href='https://github.com/govindgb' target='_blank'><FaGithub/></a>

      <a href='https://leetcode.com/Govind0007/' target='_blank'><SiLeetcode/></a>
     
       <a href='https://auth.geeksforgeeks.org/user/govindbhatt0007/practice/' target='_blank'><SiGeeksforgeeks/></a>

      
    </div>
  )
}

export default HeaderIcons
