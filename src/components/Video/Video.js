import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.scss'
import spaceVideo from '../../assets/the-expanse.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1> Leviathan Wakes </h1>
                <p>
                    Set hundreds of years in the future, the Solar System has been colonized by humanity.
                    <br/><br/>
                    A stark cold war is brewing between the two superpowers of the United Nations of Earth and Luna, and the Martian Congressional Republic.
                    Caught in the crossfire is the Outer Planets Alliance (OPA), a loose confederation of stations and colonies in the asteroid belt, as well as the moons of Jupiter and Saturn.
                </p>
                <div>
                    <Link to='/training' className='btn'> Learn More </Link>
                    <Link to='/contact' className='btn btn-light'> Max Burn </Link>
                </div>
            </div>
        </div>
    )
}

export default Video
