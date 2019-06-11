import React, { Component } from "react";

 
class MenuButton extends Component {
  render() {
    return (
      <div type="button" id="menuButton"
              onMouseDown={this.props.handleMouseDown}><i class="fas fa-bars"></i></div>
    );
  }
}
 
export default MenuButton;