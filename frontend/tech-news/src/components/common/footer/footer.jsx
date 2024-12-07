import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <img src='../images/tech-logo-footer.png' alt='' />
            <p>Your go-to platform for the latest in technology, delivering daily updates and insights every evening at 7 PM.</p>
            <i className='fa fa-envelope'></i>
            <span> nttpro0973@gmail.com </span> <br />
            <i className='fa fa-phone'></i>
            <span> +84 865975047</span>
          </div>
          <div className='box'>
            <h3>CARS</h3>
            <div className='item'>
              <img src='https://hips.hearstapps.com/hmg-prod/images/2022-honda-civic-sport-287-1648742553.jpg?crop=0.674xw:0.568xh;0.0717xw,0.415xh&resize=1200:*' alt='' />
              <p>Quick review: Honda Civic 2024</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero2.jpg' alt='' />
              <p>Cespedes play the winning Baseball Game</p>
            </div>
          </div>
          <div className='box'>
            <h3>SMARTPHONES</h3>
            <div className='item'>
              <img src='https://media.wired.com/photos/65c1609c590ed047e76afeb2/master/w_1600,c_limit/Nubia-Z60-Ultra-Review-Featured-Gear.jpg' alt='' />
              <p>Review: Nubia Z60 Ultra phone</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>Renewable energy dead as industry waits for Policy</p>
            </div>
          </div>
          {/* <div className='box'>
            <h3>LABELS</h3>
            <i className='fa fa-chevron-right'></i>
            <ul>
              <li>
                <span>Boxing</span> <label>(5)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li>
                <span>Health</span> <label>(7)</label>
              </li>
              <li>
                <span>Nature</span> <label>(9)</label>
              </li>
            </ul>
          </div> */}
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexHead'>
          <p>© All rights reserved</p>
          <p>
            made with <i className='fa fa-heart'></i> by NoobDev
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer