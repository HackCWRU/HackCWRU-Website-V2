import React, { Component } from 'react';
import { Button, Row, Col, Panel, Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import '../Assets/menuBar.css';


class MenuBar  extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const mlh = {
      display:'block',
      position:'absolute',
      right:'50px',
      top:'0',
      width:'300%',
    };
    const mlhLogo = {
      width:'100%',
    }
    return(
      <div>
        <Navbar className="menuBar">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home"><span className="menuBarText">hackCWRU Logo Here</span></a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              ABOUT
            </NavItem>
            <NavItem eventKey={2} href="#">
              TRACK
            </NavItem>
            <NavItem eventKey={3} href="#">
              FAQ
            </NavItem>
            <NavItem eventKey={2} href="#">
              SPONSORS
            </NavItem>
          </Nav>
          <Nav pullRight>
				<NavItem eventKey={1} href="#">
          <a style={mlh} target="_blank">
            <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2018/gray.svg" style={mlhLogo} />
          </a>
				</NavItem>
			</Nav>
        </Navbar>
      </div>
    );
  }

}

export default MenuBar;
