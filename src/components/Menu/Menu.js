import { useState } from 'react'

// Import from react-root-dom for pages links
import { Link } from 'react-router-dom'

// Import styles
import { ContainerMenu, ProductMenu, AboutMenu, ThirdBoxMenu } from './menu.styled'

// Import icons
import { RiArrowDropRightLine } from 'react-icons/ri'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const Menu = ({ open, setOpen}) => {

    const [product, setProduct] = useState(false)
    const [about, setAbout] = useState(false)
    const [cardmenu, setCardmenu] = useState(false)

  return (

    <ContainerMenu open={open}>


        {/* Default menu */}
        <div className="links-menu">

          <div className='header-box-menu'>

            <h1>Main Menu</h1>

            <ul>

                <li className='dropMenu' onClick={() => setProduct(!product)}>
                  <p>Services</p> <RiArrowDropRightLine />
                </li>

                <li className='dropMenu' onClick={() => setAbout(!about)}>
                  <p>Developers</p>
                  <RiArrowDropRightLine />
                </li>

              <Link to='/about' open={open} onClick={() => setOpen(false)}>
                <li>Company</li>
              </Link>

            </ul>

            <Link to='/' className="btn-signIn-menu">
              Create Account
              <HiOutlineArrowNarrowRight className='ico' />
            </Link>

          </div>

          <div className="footer-box-menu">
            <h1>Contact</h1>
            <p><strong>Bujumbura:</strong> 20 Avenue de l'université, Bujumbura-Mairie,</p>
            <p>+243896539651</p>
            <p><strong>Congo - Kinshasa:</strong> 82 Av. PE Lumumba, Ibanda, Bukavu,</p>
            <p>hello@fyatu.com</p>
          </div>

        </div>


      {/* Second menu for services link drop */}
        <ProductMenu product={product}  setProduct={setProduct}>
          
              <h1>Services</h1>

              <ul>

                <li className='dropMenu' onClick={() => setCardmenu(!cardmenu)}>
                  <p>Virtual cards</p> <RiArrowDropRightLine />
                </li>

                <Link to='/money-transfer' open={open} onClick={() => setOpen(false)}>
                  <li><p>Money transfer</p></li>
                </Link>

                <Link to='/mobile-recharge' open={open} onClick={() => setOpen(false)}>
                  <li>Mobile Recharge</li>
                </Link>

                <Link to='/gift-card' open={open} onClick={() => setOpen(false)}>
                  <li>Gift cards</li>
                </Link>

              </ul>

              <button onClick={() => setProduct(!product)}>Back</button>

        </ProductMenu>


      {/* Second menu for About link drop */}
      <AboutMenu about={about} setAbout={setAbout} product={product} setProduct={setProduct}>

            <h1>Developers</h1>

            <ul>

              <Link to='/card-api' open={open} onClick={() => setOpen(false)}>
                <li><p>Cards API</p></li>
              </Link>

              <Link to='/gift-card-api' open={open} onClick={() => setOpen(false)}>
                <li><p>Gift cards API</p></li>
              </Link>

              <Link to='/airtime-api' open={open} onClick={() => setOpen(false)}>
                <li>Airtime API</li>
              </Link>

              <Link to='/documentation' open={open} onClick={() => setOpen(false)}>
                <li>Documentation</li>
              </Link>

            </ul>

            <button onClick={() => setAbout(!about)}>Back</button>

      </AboutMenu>


      {/* 3rd level menu  */}

      <ThirdBoxMenu cardmenu={cardmenu} setCardmenu={setCardmenu}>

        <h1>Virtual cards</h1>

          <ul>

            <Link to='/chargeable' open={open} onClick={() => setOpen(false)}>
              <li><p>Chargeable</p></li>
            </Link>

            <Link to='/contactless' open={open} onClick={() => setOpen(false)}>
              <li><p>Contactless</p></li>
            </Link>

            <Link to='/threeSecured' open={open} onClick={() => setOpen(false)}>
              <li>3D Secured</li>
            </Link>

            <Link to='/multiUsage' open={open} onClick={() => setOpen(false)}>
              <li>Multi-Usage</li>
            </Link>

            <Link to='/notifications' open={open} onClick={() => setOpen(false)}>
              <li>Notifications</li>
            </Link>

            <Link to='/wallets' open={open} onClick={() => setOpen(false)}>
              <li>Wallets 2.0</li>
            </Link>

          </ul>

          <button onClick={() => setCardmenu(false)}>Back</button>

      </ThirdBoxMenu>










    </ContainerMenu>
  )
}

export default Menu