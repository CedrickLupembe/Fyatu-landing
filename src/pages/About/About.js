import React from 'react'

import { Link } from 'react-router-dom'

// Import styles
import { ContainerAbout } from './about.styled'

// Import components
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'

// Import Icons
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { BsArrowLeftShort } from 'react-icons/bs'
import { RiArrowDropRightLine } from 'react-icons/ri'

const About = ({ open, setOpen }) => {
  return (
    <ContainerAbout>

        <Sidebar open={open} setOpen={setOpen} />

            <div className="Wrapper-content-about">

                <nav className="nav-about-page">
                        <div className="pagination">
                        <Link to='/' className='back'><BsArrowLeftShort className='icon' /> Home</Link>
                        <span className="Current"><RiArrowDropRightLine className='icon' /> Our story</span>
                        </div>

                        <div className="header-links">
                            <ul>
                                <li><a href="/" className='login'>Login</a></li>
                                <li><a href="/" className='sign-up'>Create Account <HiOutlineArrowNarrowRight className='ico' /></a></li>
                            </ul>
                        </div>
                </nav>

                <div className="Container-story-content">
                    <h1>Our story</h1>
                    <div className="banner-image"></div>

                    <div className="Content-story">
                        <p>Like every other great achievement around the world, we also have our story.</p>
                        <p>
                            Sometime in 2016, my friend and I had a long and tiring flight from the United States 
                            to a country in sub-Saharan Africa. 
                            No sooner had we arrived, that we began our tour on our planned adventure.
                        </p>
                        <p>
                            Typical of tourists, we came prepared for the adventure; we came with bag-loads of edibles, 
                            gadgets, clothing items and even relief materials that we planned to distribute 
                            to every underprivileged kid we met on our tour itinerary. 
                            We also came with a little cash — US Dollars, that we hoped to exchange for local currency. 
                            As well as our debit cards to defray unplanned expenses.
                        </p>

                        <p>
                            It wasn't until we began touring the country we knew how difficult It can be to convert our 
                            foreign currency into local cash. Our debit cards were useless — 
                            It was almost impossible to access local currencies, and even when we could, 
                            the exchange rate was alarmingly high. After several attempts to get sufficient local currency 
                            proved abortive, we eventually got cash-strapped. The excitement of the adventure soon waned. 
                            It was against this backdrop, my friend and I decided to find a lasting solution to this remittance 
                            problem that has plagued most countries in Africa. Hence the development of ErrandPay.
                        </p>

                        <p>
                            ErrandPay is not just a remittance app, a fintech company or another payment platform. 
                            Rather ErrandPay is a solution, the way out, a lifeline, 
                            sometimes we like to call ErrandPay the traveler's 
                            best friend. The reason is not far fetched, we have raised the bar in remittance and payment technology, 
                            to ensure fast, easy and seamless intercontinental transactions for businessmen, 
                            students, tourists and our mobile agents across the globe. 
                            Visiting Africa just got a lot easier.
                        </p>

                        <p>
                            An idea that ensued from our awful remittance-related experience during our planned tour to a country 
                            in Africa has now developed into a company with a team of dedicated achievers, 
                            who have at one time or the other, had their fair share of remittance-related issues 
                            in different African countries, hence our shared passion. But now we have gone above 
                            and beyond to proffer solutions for remittance challenges. We are changing the narrative.
                        </p>

                        <p>
                            <h3>Félix Maroy</h3>
                            <span>Co-founder, Fyatu Limited</span>
                        </p>

                    </div>
                </div>

                <Footer />

            </div>

    </ContainerAbout>
  )
}

export default About