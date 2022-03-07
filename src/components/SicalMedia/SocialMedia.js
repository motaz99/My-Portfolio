import React from 'react'
import {FaGithub, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import classes from './SocialMedia.module.css'


const SocialMedia = () => {
  return (
    <div className={classes.container}>
      <p className='text-secondary'>You can reach me on</p>
        <ul>
          <li><a href='https://github.com/motaz99'><FaGithub 
            onMouseOver={({target})=>target.style.color='#555'}  
            onMouseOut={({target})=>target.style.color='white'}
            size='2em' color='white' 
            />
          </a></li>
          <li><a href='https://www.facebook.com/maaa122/'><FaFacebook
            onMouseOver={({target})=>target.style.color='rgb(7, 54, 126)'}  
            onMouseOut={({target})=>target.style.color='rgb(70, 123, 202)'}
            size='2em' color='rgb(70, 123, 202)' 
          />
          </a></li>
          <li><a href='https://www.instagram.com/motaz_ali98/'><FaInstagram
            onMouseOver={({target})=>target.style.color='rgb(110, 4, 77)'}  
            onMouseOut={({target})=>target.style.color='rgb(188, 42, 141)'}
            size='2em' color='rgb(188, 42, 141)' 
          />
          </a></li>
          <li><a href='https://www.linkedin.com/in/motaz-ali-31743621b/'><FaLinkedin
            onMouseOver={({target})=>target.style.color='#0c3455'}  
            onMouseOut={({target})=>target.style.color='#4682b4'}
            size='2em' color='#4682b4' 
          />
          </a></li>
        </ul>
    </div>
  )
}

export default SocialMedia;