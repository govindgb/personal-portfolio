import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
function About()
{
    return (
        <section id='about'>
          
           <h5 className='tag'>Get to know</h5>
           <h2 className='tag'>About me</h2>
          
           

           <div className="container about_container">
             <div className="about_me">
              <div className='about_me_image'>
                <img src={ME} alt="my_img" />
              </div>
             </div>

             <div className='about_contend'>
               <div className='about_cards'>
                 <article className='about_card'>
                   <FaAward className='about_icon'/>
                   <h5>Experience</h5>
                   <small>6 Months</small>
                 </article>

                 <article className='about_card'>
                   <FiUsers className='about_icon'/>
                   <h5>college</h5>
                   <small>RSR RCET Bhilai</small>
                 </article>

                 <article className='about_card'>
                   <VscFolderLibrary className='about_icon'/>
                   <h5>Project</h5>
                   <small>10+ project complete</small>
                 </article>

                
               </div>
              
               <p>Hello everyone. I'm a software developer from Bhilai, Chhattisgarh. I'm good at web programming, and I also enjoy finding solutions of difficult problems. Message us if you want to join us.</p>
               <a href='#contact' className='btn btn-primary'>Let's Talk</a>
               
              
             </div>

            

            

           </div>
       </section>
    )
}

export default About



