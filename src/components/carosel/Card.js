import React from 'react'

const Cards = (props) => {
  console.log(props.data.img)

  return(
    <div className='card'>
      <img className="card-img-top" src={`${process.env.PUBLIC_URL}${props.data.img}`} alt='person using product'/>
      <div className="card-body">
        <div className="card-text-container">
          <div className="card-text">You earned {props.data.earnings}</div>
          <div className="card-text">from {props.data.user}</div>
        </div>
        <img src={`${process.env.PUBLIC_URL}${props.data.logo}`} alt={`${props.data.company} logo`} className="logo"/>
      </div>
    </div>
  )
}

export default Cards