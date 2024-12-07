import React from "react"
import "./side.css"
// import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
// import { gallery } from "../../../../dummyData"
import Quickview from "../quickview/quickview"
import Tips from "../tips/tips"
import Esports from "../esports/esport"


//const allCat = [...new Set(popular.map((curEle) => curEle.category))]
//console.log(allCat)

const Side = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   }

  const category = ["Software", "Reviews", "Games", "Hardware", "Smartphones", "Tablet", "Motorcycle", "Cars"]
  return (
    <>
      {/* <Heading title='Quick View' /> */}
      <Quickview />
      <Esports/>
      <Tips/>

      {/* <Heading title='Subscribe' /> */}

      {/* <section className='subscribe'>
        <h1 className='title'>Subscribe to our New Stories</h1>
        <form action=''>
          <input type='email' placeholder='Email Address...' />
          <button>
            <i className='fa fa-paper-plane'></i> SUBMIT
          </button>
        </form>
      </section> */}
{/* 
      <section className='banner'>
        <img src='./images/sidebar-banner-new.jpg' alt='' />
      </section> */}

      {/* <Tpost /> */}

      <section className='tag'>
        <Heading title='Tags' />
        {/*<div className='items'>{allCat}</div>*/}
        {category.map((val, index) => {
          return (
            <div className='tags tags1' key={index}>
              <span>{val}</span>
            </div>
          )
        })}
      </section>
{/* 
      <section className='gallery'>
        <Heading title='Gallery' />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
            )
          })}
        </Slider>
    //   </section> */}
    </>
  )
}

export default Side