import React from 'react'
import './Testimonials.css'

import {SiLeetcode} from 'react-icons/si';
import {FaGithub} from 'react-icons/fa';
import {SiGeeksforgeeks} from 'react-icons/si';
import {AiFillLinkedin} from 'react-icons/ai';
// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    icon: <a href='https://leetcode.com/Govind0007/' target='_blank'><SiLeetcode size={50} /></a>,
    name: 'Leetcode',
    review: 'LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews'


  },
  {
    id: 2,
    icon:  <a href='https://github.com/govindgb' target='_blank'><FaGithub  size={50}/></a>,
    name: 'Github',
    review: 'Founded in 2007, GitHub has brought millions of developers together to discover, share, and build better software'


  },
  {
    id: 3,
    icon:   <a href='https://auth.geeksforgeeks.org/user/govindbhatt0007/practice/' target='_blank'><SiGeeksforgeeks size={50} /></a>,
    name: 'Geeksforgeeks',
    review: 'We provide a variety of services for you to learn, thrive and also have fun! Free Tutorials, Millions of Articles, Live, Online and Classroom Courses ,Frequent ...'


  }
  // {
  //   id: 4,
  //   icon:   <a href='https://www.linkedin.com/in/govind-bhatt-a64b40202/' target='_blank'><AiFillLinkedin size={50}/></a>,
  //   name: 'Linkedin',
  //   review: 'LinkedIn is a social networking site designed specifically for the business community. The goal of the site is to allow registered members to establish and document networks of people they know and trust professionally'


  // }
]
function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from your side</h5>
      <h2>Coding Profiles</h2>

      <Swiper className='conatainer testimonials_container'

      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
     
      pagination={{ clickable: true }}>
     
        {
          // read about the brackest...
          data.map(({ icon, name, review, id }) => {
            return (
              <SwiperSlide key={id} className='testimonial'>
                {/* <div className='client_avatar'> */}
                  {/* <img src={avatar} alt="Avatar one" /> */}
                {icon}
                {/* </div> */}

                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>
                   {review}
                </small>

              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials
