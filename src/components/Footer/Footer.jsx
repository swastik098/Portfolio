import React from 'react'
import './footer.css'
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
// import {SiCodewars} from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai';


const Footer = () => {
  return (
   <footer className="footer__container">

    <ul className="permalinks" data-aos="fade-up" data-aos-anchor=".footer__container"  data-aos-duration='1400'>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#reviews">Reviews</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>


    <div className="footer__socials" data-aos="fade-up" data-aos-anchor=".footer__container"  data-aos-duration='1600'>
      <a href="https://www.linkedin.com/in/swastik-giri-5b785a1a0/"><BsLinkedin/></a>
      <a href="https://www.instagram.com/swastikkk_77/"><BsInstagram/></a>
      <a href="https://github.com/swastik098"><AiFillGithub/></a>
    </div>

    <div className="footer__copyright" data-aos="fade-up" data-aos-anchor=".footer__container"  data-aos-duration='1800'>
      <small>&copy; Swastik_Ranjan_Giri All rights reserved</small>
    </div>
   </footer>
  )
}

export default Footer