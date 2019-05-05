import React from 'react'

const Card = (props) => {

  return(
    <div className='card'>
      <img src="" alt=""/>
      <div className="reward">{props.data.name}</div>
      <div className="user">User</div>
      <img src="" alt="" className="logo"/>
    </div>
  )
}

export default Card