import React from 'react'


const DropdownHeader = (props) => {

  return (
    <div className="dropdown-header">
      <img className="dollar-sign" src='/images/dollar-sign.svg' alt='dollar sign'/>
      <span className="dropdown-header-text" onClick={props.dropdownClickHandler}>
        <span>Where's the money coming from?</span>
      </span>
      <span className="dropdown-header-text" onClick={props.dropdownClickHandler}>
        <i className="down"></i>
      </span>
    </div>
  )
}

export default DropdownHeader