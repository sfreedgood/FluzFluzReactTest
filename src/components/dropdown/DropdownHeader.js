import React from 'react'

const DropdownHeader = (props) => {

  return (
    <div className="dropdown-header" onClick={props.dropdownClickHandler}>
      Click Me!
    </div>
  )
}

export default DropdownHeader