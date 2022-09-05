import React from 'react'

import {Link} from 'react-router-dom'


// Import styles
import { ContainerDev } from './developer.styled'

// Import components
import Sidebar from '../../components/Sidebar'

import Footer from '../../components/Footer'

// Import Icons
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { BsArrowLeftShort } from 'react-icons/bs'
import { RiArrowDropRightLine } from 'react-icons/ri'
import { BiCheckCircle } from 'react-icons/bi'


const Developer = ({ open, setOpen }) => {
    
  return (
    <ContainerDev>
      
        <Sidebar open={open} setOpen={setOpen}/>
        
        <div className="Content-dev">

            <nav className="nav-dev-page">

                <div className="pagination">
                  <Link to='/' className='back'><BsArrowLeftShort className='icon' /> Home</Link>
                  <span className="Current"><RiArrowDropRightLine className='icon' /> Contact Us</span>
                </div>

                  <div className="header-links">
                    <ul>
                        <li><a href="/" className='login'>Login</a></li>
                        <li><a href="/" className='sign-up'>Create Account <HiOutlineArrowNarrowRight className='ico' /></a></li>
                    </ul>
                </div>

            </nav>

            <div className="header-box-dev">
                <div className="title-one">
                  <h1>Hi! Want to get in touch with <span>us ?</span></h1>
                </div>
            </div>

            <div className='content-wrapper-dev'>

                <p>
                  Whether you have a question to ask or a problem to solve, 
                  head to our FAQ pages to see if we've answered it there. 
                  We've filled it with loads of useful information, 
                  including an overview of the services we offer and important details like:
                </p>

                <p>
                  Our competitively-priced payout options, including cash pickup, 
                  bank account transfers and mobile money, 
                  have distinguished us from other remittance companies. 
                  Hence our large customer base.
                </p>

                <ul>
                    <li><BiCheckCircle className='beforeIcon' /> How much you can send</li>
                    <li><BiCheckCircle className='beforeIcon' /> How long it takes for your money to arrive ?</li>
                    <li><BiCheckCircle className='beforeIcon' /> How you can pay for your transfer</li>
                    <li><BiCheckCircle className='beforeIcon' /> How we process cancellations and refunds</li>
                    <li><BiCheckCircle className='beforeIcon' /> How we process personal information</li>
                    <li><BiCheckCircle className='beforeIcon' /> How to verify your identity</li>
                    <li><BiCheckCircle className='beforeIcon' /> Image with text saying submit your documents</li>
                </ul>

                <div className="Narration-box">
                    <p>
                        Because of COVID-19 safety measures and movement restrictions, 
                        we're operating with fewer support team members at the moment. So, 
                        it may take a little longer than usual to get in touch with us. 
                        To ensure that we give you the best service possible, we can offer 
                        you a choice of support options:
                    </p>

                    <p>
                      If you have a transaction in progress, we can offer support through our chat agents!
                    </p>

                    <p>
                      NB. As a reminder please don't send us your card details.
                    </p>
                </div>

            </div>


            <Footer />
        </div>
    </ContainerDev>
  )
}

export default Developer