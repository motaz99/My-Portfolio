import React, {useEffect, useRef, useState} from 'react'
import Lottie from 'lottie-web'
import NavBar from '../../components/NavBar/NavBar'
import SocialMedia from '../../components/SocialMedia/SocialMedia'
import SendEmail from '../../components/SendEmail/SendEmail'
import { useTransition, animated } from 'react-spring'
import classes from './Contact.module.css'

const Contact = () => {

  const container = useRef(null);
  const [items, setItems] = useState([]);
  const transition1 = useTransition(items, {
      from: { x: 300 , opacity: 0},
      enter: { x: 0, opacity:1, config: { duration: 1050 }},
    })
  

  useEffect(()=>{

    Lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop:true,
        autoplay: true,
        animationData: require('../../lotties/email.json')
    })
    setItems(v => v.length ? [] : [{}]);

  },[]);
  return (
    <>
      <NavBar />
      {transition1((style, item) => item ? <animated.div style={style} className={classes.title}>
        <h1 className={`${classes.h1} display-6`}>Throw me A Message</h1>
        <p className='fs-5'>I'm available for freelance, Send me a message and let's talk about what you need. can't wait to work with new people.</p>
      </animated.div> : '')}
      <div className={classes.wrapper}>
          <SendEmail />
          <div className={classes.animation}>
            <div className={classes.container} ref={container} />
          </div>
      </div>
      <div className={classes.socialMedia}>
      <SocialMedia />
      </div>
    </>
  )
}

export default Contact