import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Nav, NavItem} from 'react-bootstrap';

class Sidebar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='container'>
          <Nav >
            <NavItem>
              <NavLink exact to="/messaging">
              <div className="sidebar-card">
                <h6>CHATS</h6>
              </div>
                
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/clients">
                <div className="sidebar-card">
                <h6>CLIENTS</h6>
                </div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/journey">
              <div className=" sidebar-card">
              <h6>JOURNEY</h6>
              </div>  
              </NavLink>

            </NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
