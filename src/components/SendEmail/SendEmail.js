import React, {useEffect, useState} from 'react'
import classes from './SendEmail.module.css'
import emailjs from 'emailjs-com'
import { useTransition, animated } from 'react-spring'


const SendEmail = () => {
    const [items, setItems] = useState([]);
    const transition1 = useTransition(items, {
        from: { y: 300 , opacity: 0},
        enter: { y: 0, opacity:1, config: { duration: 1050 }},
      })

      useEffect(()=>{
        setItems(v => v.length ? [] : [{}]);
      },[]);
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            'service_8yra4uw',
            'template_576q2bg',
            e.target,
            'Vqeb-hFiZsG5Jl0WM'
            ).then((result) => {
                alert("Thank you, Your messeage have been sent");
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    }
  return (
      <>
    {transition1((style, item) => item ? <animated.div style={style} className={classes.wrapper}>
         <div className={classes.form}>
            <h1 className='display-6 text-info'>Send me a message</h1>
            <form action="" onSubmit={sendEmail} className='text-info'>
                <div className={classes['flex-rev']}> 
                   <input type="text" placeholder="Your name..." name="name" id="name" />
                   <label htmlFor="name">Full Name</label> 
                </div>
                <div className={classes['flex-rev']}> 
                  <input type="email" placeholder="Your Email" name="email" id="email" />
                  <label htmlFor="email">Your Email</label> 
                </div>
                <div className={classes['flex-rev']}>
                   <textarea placeholder="I have an idea for a project...." name="message" id="message" />
                   <label htmlFor="message">Email Message</label> 
                </div> 
                <button className='text-info' type='submit' value='Send'>Send Email</button>
            </form>
        </div>
    </animated.div> : '')}
    </>
  )
}

export default SendEmail