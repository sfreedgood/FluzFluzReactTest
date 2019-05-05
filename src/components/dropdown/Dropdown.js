import React, { Component } from 'react'
import DropdownContent from './DropdownContent'
import DropdownHeader from './DropdownHeader'

class Dropdown extends Component {
  state = {
    expanded: false
  }
 
  dropdownClickHandler = (e) => {
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }))
  }

  render() { 
    console.log(this.state.expanded)
    return (
      <div className="dropdown-container" onClick={this.dropdownClickHandler}>
        <DropdownHeader />
        {
          this.state.expanded &&
          <DropdownContent />
        }
      </div>
    );
  }
}
 
export default Dropdown;