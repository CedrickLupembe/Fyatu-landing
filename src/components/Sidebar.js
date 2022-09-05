import React from 'react'

// Import links
import { Link } from 'react-router-dom'

// Import styles
import { MainSide } from '../styles/sidebar.styled'

// Import burgerbtn
import Burger from './Burger'

// Import Icons
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

// Import images
import avatar from '../images/svgs/avatar.png'

const Sidebar = ({open, setOpen}) => {

  return (
    <MainSide>

        <div className='Humbourger'>

            <div className="humbourger-menu">

                <Burger open={open} setOpen={setOpen} />
                <span>Menu</span>
            </div>

        </div>

        <div className='Logo-center'>
            <Link className='log-nav-mob' to='/'>Login</Link>
            <Link to='/' onClick={() => setOpen(false)}><img src={avatar} alt="Fyatu avatar" /></Link>
        </div>


        <div className='Social-icons'>

            <div className="wrapper">
                <div className="divider"></div>
                <a href="/"><FaFacebookF /></a>
                <a href="/"><FaLinkedinIn /></a>
                <a href="/"><FaInstagram /></a>
            </div>

        </div>


    </MainSide>
  )
}

export default Sidebar