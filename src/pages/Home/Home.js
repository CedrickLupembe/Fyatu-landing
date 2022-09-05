import React, { useEffect } from 'react'

// Import styles
import { ContainerBox, ContentBox } from './home.styled'

// Import Icons
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'


// Import Aos scroll animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'


// Import Images
import scrolldown from './img/scroll-down.svg'
import playstore from './img/google-play.svg'
import appstore from './img/apple-store.svg'
import whatsapp from './img/whatsapp.svg'
import africanGirl from './img/african.jpg'
import blackAfrican from './img/black-african.jpg'
import meeting from './img/meeting.jpg' 
import africanTwo from './img/african2.jpg'
import africanThree from './img/african3.webp'

const Home = ({ open, setOpen }) => {

  useEffect(() => {
    
    AOS.init({
        duration: 200
    });

}, []);


  return (
    <ContainerBox>

        <Sidebar open={open} setOpen={setOpen} />

        <ContentBox>
            <div className="Hero-banner">

            <nav className="nav-dev-page">

                <ul>
                  <li><a href="/" className='login'>Login</a></li>
                  <li><a href="/" className='sign-up'>Create Account <HiOutlineArrowNarrowRight className='ico' /></a></li>
                </ul>

            </nav>

                <div className="Grid">
                  <h1 data-aos="fade-up" 
                      data-aos-anchor-placement="bottom-bottom"
                      data-aos-duration="800"
                    >
                      Agency Banking, Anytime, Anywhere</h1>
                  <p  data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                      data-aos-duration="2000"
                    >
                    Join thousands of people who use the Fyatu platform for their agency banking needs. 
                    We are cheaper and more accessible than banks within local communities.
                  </p>

                  <div className="connexion-links" data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        data-aos-duration="2500"
                  >
                    <a href="/"><img src={playstore} alt="Avatar to playstore" /></a>
                    <a href="/"><img src={appstore} alt="Avatar to appstore" /></a>
                    <a href="/"><img src={whatsapp} alt="Avatar to whatsapp" /></a>
                  </div>
                </div>

                <div className="scroll-down">
                    <a href="#wrapper-two"><img src={scrolldown} alt="img scroll down" /></a>
                </div>

            </div>

            <section id='wrapper-two'>
                  <div className="box-wrapper-one">
                      <div className='TitleOne'>
                          <h3 data-aos="fade-up"
                              data-aos-duration="500"
                            >
                            FYATU APP</h3>
                          <h1 data-aos="fade-up"
                              data-aos-duration="2500"
                            >
                              A better way todo business in Africa!</h1>
                      </div>

                      <ul data-aos="fade-up"
                          data-aos-duration="3000"
                        >
                          <li>Anyone with a device can use our mobile payments app to setup an access point in their community</li>
                          <li>People can deposit and withdraw money in real time through our access points</li>
                          <li>Super Agents" or "Aggregators" do not incur additional expenses for using the Errandpay platform.</li>
                          <li>ErrandPay is free to download and use, with minimal fees for certain types of transactions but no fee for Bills payment</li>
                      </ul>
                      
                  </div>

                  <div className="box-wrapper-two">

                      <div className='Box-left-photo'>
                          <div className='div-item-one' 
                                data-aos="fade-down-right"
                                data-aos-duration="2500"
                          >
                            <img src={africanGirl} alt="Black girl" />
                          </div>

                          <div className='div-item-two'
                                data-aos="fade-up"
                                data-aos-duration="3000"
                          >
                            <img src={blackAfrican} alt="Black girls images" />
                          </div>
                      </div>

                      <div className="Box-right-photo">
                          <h1  data-aos="fade-up"
                              data-aos-duration="1000"
                            >
                              ErrandPay has an intuitive user-friendly 
                              interface designed to make the process simple and easy to understand.
                          </h1>

                          <p  data-aos="fade-up"
                              data-aos-duration="3000">
                            Our aim at ErrandPay is to be the go-to provider for secure and cost- 
                            effective agency banking solutions. We have raised the bar in financial 
                            technology making it easy for people to access digital and financial 
                            services in local communities.
                          </p>
                      </div>

                  </div>

                  <div className="box-wrapper-three">

                    <div className="div-left-header">
                          <h1 data-aos="fade-up"
                              data-aos-duration="1000"
                          >
                            Get customized POS terminals to build your brand 
                            and a free ErrandPay platform to support your 
                            agency banking business needs
                          </h1>

                          <p
                              data-aos="fade-up"
                              data-aos-duration="3000"
                            >
                              ErrandPay can be used across multiple devices such as laptops, 
                              mobile gadgets and POS devices. We also have 
                              premium plans for individuals and small business owners who 
                              need extra features including white-label.
                          </p>
                    </div>

                    <div className="div-right" 
                          data-aos="fade-up"
                          data-aos-duration="3000"
                      >
                      <img src={meeting} alt="People on meeting" />
                    </div>
                  </div>
            </section>

            <section className='Centralize-box'>

                  <div className="Header-title">
                    <h1 data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        Fyatu News</h1>

                    <p  data-aos="fade-up"
                        data-aos-duration="3000"
                      >
                      For everyone, businesses and entrepreneurs 
                      across Africa, doing business with Africans has 
                      never been easier
                    </p>
                  </div>

                  <div className="Grid-cards">
                      
                          <a href="/">
                            <div className="Item" 
                                  data-aos="fade-up"
                                  data-aos-duration="1000"
                            >
                                <div className="Img-poster">
                                  <img src={africanGirl} alt="African girl" />
                                </div>
                              <strong>Financial Inclusion in Africa</strong>
                              <div className="footer-post">
                                <span>Business</span>
                                <span>Nov. 25, 2020</span>
                              </div>
                            </div>
                          </a>

                          <a href="/">
                            <div className="Item" 
                                  data-aos="fade-up"
                                  data-aos-duration="200"
                            >
                                <div className="Img-poster">
                                  <img src={africanTwo} alt="African business" />
                                </div>
                              <strong>Bringing the world in Africa</strong>
                              <div className="footer-post">
                                <span>Business</span>
                                <span>Nov. 21, 2020</span>
                              </div>
                            </div>
                          </a>

                          <a href="/">
                            <div className="Item"
                                  data-aos="fade-up"
                                  data-aos-duration="3000"
                            >
                                <div className="Img-poster">
                                  <img src={africanThree} alt="African business girl" />
                                </div>
                              <strong>How FinTech can change the lives of women in Africa</strong>
                              <div className="footer-post">
                                <span>Business</span>
                                <span>Nov. 25, 2020</span>
                              </div>
                            </div>
                          </a>

                  </div>

            </section>

            <Footer />

        </ContentBox>


    </ContainerBox>
  )
}

export default Home