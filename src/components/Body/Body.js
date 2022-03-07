import React from 'react'
import {useEffect, useRef, useState} from 'react'
import { useTransition, animated } from 'react-spring'
import {Button, Collapse} from 'react-bootstrap'
import Typed from 'react-typed';
import classes from './Body.module.css'
import Lottie from 'lottie-web';
import SocialMedia from '../SicalMedia/SocialMedia'




const Body = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const container = useRef(null);
  const transition1 = useTransition(items, {
    from: { x: -300 , opacity: 0},
    enter: { x: 0, opacity:1, config: { duration: 1050 }},
  })
  useEffect(()=>{
    Lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop:true,
        autoplay: true,
        animationData: require('../../lotties/96143-developer.json')
    })
    setItems(v => v.length ? [] : [{}]);
  },[]);

  


  return (
    <>
    <div className={classes.wrapper}>
      <div className={classes.content}>
          {transition1((style, item) => item ? <animated.div style={style} className={classes.textControl}>
        <div className={classes.myNameTitle}>
        <p>Hi There, I'm</p>
        <h2 className='display-6'>I'm Motaz Ali</h2>
        <p>Freelancer Front-end Developer</p>
        <p > <Typed className="strongy"
                  strings={['The hardest things in life', 'Become simple with  time', 'Just stick with your goal', 'You will make it in the end']}
                  typeSpeed={60} backSpeed={40} loop />
        </p>
        </div>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className='bg-info text-body'
      >
        More about me
      </Button>
      <div className={classes.moreAboutMe} >
        <Collapse in={open} dimension="height">
          <div id="example-collapse-text" className='text-secondary '>
              Hello, my name is Motaz.  I have been studying electronics engineering in the systems and control department.
              I was one of the outstanding students in the department, however, I was trying to travel.  One day, 
              I was accepted into a scholarship whose owner was a software engineer working at Facebook, and he was from the same country as me, 
              and he liked to help young people achieve their dreams.  I postponed my year in college and traveled to Turkey, 
              which was the host country for the scholarship.  The grant was a self-development that you can learn any skill you want, 
              and the grant provides you with support for that. I had an interest in programming websites, so I began to learn them, and over time, 
              I became very fond of programming websites.  programming and programming thinking in general and how I need to be outside my comfort zone to be able to learn and devise my ways of learning.  
              Now I am thinking that I will leave my university and change my profession to a web programmer and continue my learning journey.  
              I spend about ten hours or so learning web programming.   
          </div>
        </Collapse>
      </div>
        <SocialMedia/>
          </animated.div> : '')}
      </div>
      <div className={classes.animation}>
          <div className={classes.container} ref={container}></div>
      </div>
    </div>
    
    </>
  )
}

export default Body








{/* <p>   
            <Typical 
            loop={Infinity}
            wrapper='b'
            steps={[
              'I am a front-end developer',
              1000,
              'and I like coding',1000
            ]}
            />
          </p>
          <SocialMedia /> */}




{/* <div>
       <p>   
            <Typical 
            loop={Infinity}
            wrapper='b'
            steps={[
              'I am a front-end developer',
              1000,
              'and I like coding',1000
            ]}
            />
          </p>
      </div> */}