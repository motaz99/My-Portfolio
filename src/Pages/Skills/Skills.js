import React, {useEffect, useRef, useState} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Lottie from 'lottie-web';
import { useTransition, animated } from 'react-spring'
import classes from './Skills.module.css'

export const Skills = () => {
  const container = useRef(null);
  const [items, setItems] = useState([]);
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
        animationData: require('../../lotties/codingSkills.json')
    });
    setItems(v => v.length ? [] : [{}]);
  },[]);
  return (
    <>
    <NavBar />
     <div  className={classes.wrapper}>
      {transition1((style, item) => item ? <animated.div style={style} className={`${classes.title} `}>
        <h1 className='display-6'>I can use these tools</h1>
        <div className={`${classes.Skills} lead text-info`}>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Bootstrap</p>
            <p>React</p>
            <p>Redux</p>
            <p>GitHub</p>
        </div>
      </animated.div> : '')}
        <div className={classes.animation}>
            <div className={classes.container} ref={container} />
        </div>
    </div>
    </>
  )
}

export default Skills;
