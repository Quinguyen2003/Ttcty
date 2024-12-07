import React from "react"
import { Link } from "react-router-dom"

const Card = ({ item: { id, cover, tags_name, title, author, date } }) => {
  return (
    <>
      <div className='box'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <div className='text'>
          <span className='tags'>{tags_name}</span>
          {/*<h1 className='titleBg'>{title}</h1>*/}
          <Link to={`/detailpost/${id}`}>
            <h1 className='titleBg'>{title}</h1>
          </Link>
          <div className='author flex'>
            <span>by {author}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card