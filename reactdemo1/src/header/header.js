import React, { Component } from 'react';
class Header extends Component {
    constructor(){
        super();
    }
    render(){
        return (
            <h1>I am the {this.props.userName} {this.props.name} Component </h1>
        );
    }
}

Header.defaultProps = {
    userName: "world",
  };

export default Header;  