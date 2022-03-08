import React, {useEffect, useRef} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Lottie from 'lottie-web';
import classes from './Skills.module.css'

export const Skills = () => {
  const container = useRef(null);
  useEffect(()=>{

    Lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop:true,
        autoplay: true,
        animationData: require('../../lotties/codingSkills.json')
    })
  },[]);
  return (
    <>
    <NavBar />
    <div className={classes.wrapper}>
      <div className={`${classes.title} `}>
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
      </div>
        <div className={classes.animation}>
            <div className={classes.container} ref={container} />
        </div>
    </div>
    </>
  )
}

export default Skills;
