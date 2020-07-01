import React, { Component } from 'react'
import {NavBar, Nav, NavItem} from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Sidelist extends Component {
    render() {
        return (
            <div >
                <Container>
                <div className="navbar">
        
          <p><NavLink to='/dashboard'className="sidelist" activeClassName="active">DASHBOARD</NavLink></p>
          <p><NavLink to='/About' className="sidelist" activeClassName="active">ABOUT</NavLink></p> 
          <p><NavLink to='/Team' className="sidelist" activeClassName="active">TEAM</NavLink></p>
        
      </div>
               
                </Container>
               
                              
            </div>
        )
}
}
export default Sidelist
