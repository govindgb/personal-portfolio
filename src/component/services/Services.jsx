import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
function Services() {
  return (
    <section id='services'>
        <h5 className='center'>My Learnings</h5>
        <h2 className='center'>RoadMap</h2>

        <div className='container services_container'>
          <article className='service'>
            <div className='services_head'>
              <h3>Data Structure</h3>
            </div>
            <ul className='service_list'>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Array and Matrix</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>String and LinkList</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Recursion and BackTracking</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Stack and Queue</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Tree and Graph</p>
              </li>
            </ul>
          </article>
          {/* end of ui ux */}
          <article className='service'>
            <div className='services_head'>
              <h3>Web Devlopment</h3>
            </div>
            <ul className='service_list' >
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>HTML </p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Css and BootsTrap</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>JavaScript and Jquery</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>React js and Git</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Node js and Express js</p>
              </li>
            </ul>
            {/* end of webdevlopment */}
          </article>
          <article className='service'>
            <div className='services_head'>
              <h3>Computer Subject</h3>
            </div>
            <ul className='service_list'>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Operating System</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>DataBase and ManageMent System</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Structure Query Language</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Computer Network</p>
              </li>
              <li>
                 <BiCheck className='sevice_list-icon' />
                 <p>Object oriented Programming</p>
              </li>
            </ul>
          </article>
        </div>
    </section>
  )
}

export default Services
