import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import { FiFolder } from 'react-icons/fi'
const data = [
  {
    id:1,
    image : '<FiFolder/>',
    title:'TinDog',
    desc:'Build a PlayGround website for learning about the concepts of BootsTrap,CSS and HTML',
    github:'https://github.com/govindgb/Dogy-Date',
    demo:'https://govindgb.github.io/Dogy-Date/'

  },
  {
    id:2,
    image : IMG2,
    title:'Drogan-jump-game',
    desc:'Build a project by using pure HTML CSS ans JAVASCRIPT',
    github:'https://github.com/govindgb',
    demo: 'https://govindgb.github.io/Drogan-jump-game/'
  },
  {
    id:3,
    image : IMG3,
    title:'Drum Kit',
    desc:'Drum Kit website for learning about DOM and how to work with Audio in JavaScript',
    github:'https://github.com/govindgb/Drum-kit',
    demo: 'https://govindgb.github.io/Drum-kit/'
  },
  {
    id:4,
    image : IMG4,
    title:'Simon-Game',
    desc:'Simon-game for learning about CSS BOOTSTRAP and JQUERY',
    github:'https://github.com/govindgb/Simon-Game-',
    demo: 'https://govindgb.github.io/Simon-Game-/'
  },
  {
    id:5,
    image : IMG5,
    title:'Sign-Up',
    desc:'Build a sign page and login page by using MAILCHIMP API ',
    github:'https://github.com/govindgb',
    demo: 'https://infinite-shore-79248.herokuapp.com/'
  },
  {
    id:6,
    image : IMG6,
    title:'Mp3-music-player',
    desc:'Making an MP3 player with HTML, CSS, and JavaScript',
    github:'https://github.com/govindgb/Mp3-music-player',
    demo: 'https://govindgb.github.io/Mp3-music-player/'
  }
]
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5 >My recent Work</h5>
      <h2 >portfolio</h2>

      <div className='conatainer portfolio_container'>
      {
        data.map(({id,image,title,desc,github,demo})=>{
          return(
            <article key={id} className='portfolio_item'>
            <div className='portfolio_item-image'>
              {/* <img src={image} alt={title} /> */}
              <FiFolder size={25} />
            </div>
            <p>{title}</p>
            <h3>{desc}</h3>
            <div className='portfolio_items_cta'>
             <a href={github} className='btn pbtn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
             </div>
            
          </article>
          )
        })
      }
       
      </div>

    </section>
  )
}

export default Portfolio
