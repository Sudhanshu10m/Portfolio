import React from 'react'

const skillCard = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="logo"></img>
      <span className="caption">{props.text}</span>
    </div>
  )
}

export default skillCard
