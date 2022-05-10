import React from 'react'
import './FooterStyles.scss'
import { FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />
                        <div>
                            <p> Block VII Xerxes </p>
                            <h4> Londres Nova, Mars </h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> 0-877-8876-3027 </h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> mfachry.handoko@gmail.com </h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About</h4>
                    <p>
                        "James S. A. Corey is the pen name of two authors,
                         Daniel Abraham and Ty Franck, the latter being
                         a personal assistant of the renowned, legendary
                         writer George R. R. Martin."
                         <br/>
                    </p>
                    <div className='social'>
                        <FaInstagram size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaGithub size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
