import React, {useEffect} from 'react'

// Import Aos for scroll animation
import AOS from 'aos';
import 'aos/dist/aos.css'

// Images import 
import fyatuLogo from '../images/svgs/fyatu-logo.png'
import playstore from '../images/svgs/google-play.svg'
import appstore from '../images/svgs/apple-store.svg'
import whatsapp from '../images/svgs/whatsapp.svg'

// Icons
import { HiArrowRight } from 'react-icons/hi'
import {FaFacebookF, FaLinkedinIn, FaInstagram} from 'react-icons/fa'


// Import styles
import { ContainerFooter } from '../styles/footer.styled'


const Footer = () => {

  useEffect(() => {

    AOS.init({
        duration: 300
    });
 
}, []);


  return (
    <ContainerFooter>

        <section className="Footer-top">
                  <div className="header-foot-top">
                      <span data-aos="fade-up" data-aos-duration="500">FYATU MOBILE</span>
                      <h1 data-aos="fade-up" data-aos-duration="1500">Download our Mobile App</h1>

                      <div className="para">
                        <p data-aos="fade-up"
                           data-aos-duration="2500"
                        >
                          Get started with Fyatu using your mobile phone to 
                          carry out transactions at anytime and anywhere
                        </p>
                      </div>
                  </div>

                  <div className="social-link-foot-top" 
                       data-aos="fade-up"
                       data-aos-duration="3000"
                  >
                      <a href="/"><img src={playstore} alt="Avatar to playstore" /></a>
                      <a href="/"><img src={appstore} alt="Avatar to appstore" /></a>
                      <a href="/"><img src={whatsapp} alt="Avatar to whatsapp" /></a>
                  </div>
        </section>

        <div className='Footer-bottom'>

                <div className="footer-content">
                  <div className="link-references">
                    <span><img src={fyatuLogo} alt="Fyatu" draggable='false' /></span>
                    <ul>
                      <li><a href="/">Refer a friend</a></li>
                      <li><a href="/">FAQ</a></li>
                      <li><a href="/">Terms & Conditions</a></li>
                      <li><a href="/">Privacy policy</a></li>
                      <li><a href="/">Partnership & Affiliates</a></li>
                      
                    </ul>
                  </div>
                </div>

                <div className="footer-content">
                    <div className="footer-list">
                        <h1>CONTACT</h1>
                        <a href="/">Contact us</a>
                        <p><strong>Bujumbura:</strong> 20 Avenue de l'université, Bujumbura-Mairie,</p>
                        <p>+243896539651</p>
                        <p><strong>Congo - Kinshasa:</strong> 82 Av. PE Lumumba, Ibanda, Bukavu,</p>
                        <p>hello@fyatu.com</p>
                    </div>
                </div>

                <div className="footer-content">
                    <div className="newsletter">
                        <h1>NEWSLETTER</h1>
                        <p>
                            Subscribe to our newsletter to get exclusive offers, 
                            latest news and updates on fyatu App.
                        </p>
                        <form>
                            <input type="text" placeholder='Enter your email' />
                            <button type='submit'><HiArrowRight /></button>
                        </form>
                    </div>
                </div>
        </div>

        <div className="Footer-base">
            <p>Copyright © 2022 Fyatu P LTD . All rights reserved</p>
            <ul>
                <li><a href="/"><FaLinkedinIn /></a></li>
                <li><a href="/"><FaFacebookF /></a></li>
                <li><a href="/"><FaInstagram /></a></li>
            </ul>
        </div>

    </ContainerFooter>
  )
}

export default Footer