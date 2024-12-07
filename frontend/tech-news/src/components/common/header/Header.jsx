import React, { useState } from 'react'
import Head from './Head'
import { Link } from 'react-router-dom'
import './header.css'


const Header = () => {
  const [navbar, setNavbar] = useState(false)
  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul className={navbar ? 'navbar' : 'flex'} onClick={() => setNavbar(false)}>
              <li>
                <Link to = '/'>Home</Link>
              </li>
              <li>
                <Link to = '/techpages'>Tech News</Link>
              </li>
              <li>
                <Link to = '/vehiclepages'>Ride & Drive</Link>
              </li>
              <li>
                <Link to = '/esportpages'>Esports</Link>
              </li>
              <li>
                <Link to = '/musicpages'>Music</Link>
              </li>
              <li>
                <Link to = '/tippages'>Tips & Tricks</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
