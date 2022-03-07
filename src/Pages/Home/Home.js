import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Body from '../../components/Body/Body'
import classes from './Home.module.css'

const Home = () => {
  return (
    <div className={classes.homeContainer}>
        <NavBar />
        <Body />
    </div>
  )
}

export default Home