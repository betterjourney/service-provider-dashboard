import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Nav} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='container'>
          <Nav >
            <NavLink exact to="/">Home</NavLink>
          </Nav>
        </div>
      </div>
    );
  }
}

export default Header;
