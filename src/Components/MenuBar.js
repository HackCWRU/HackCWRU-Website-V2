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
      maxWidth:'100px',
      minWidth:'60px',
      position:'absolute',
      right:'50px',
      top:'0',
      width:'10%',
      zIndex:'10000'
    };
    const mlhLogo = {
      width:'100%',
    }

    const imgLink = "https://s3.amazonaws.com/logged-assets/trust-badge/2018/gray.svg";
    const link = "https://mlh.io/seasons/na-2018/events?utm_source=na-2018&utm_medium=TrustBadge&utm_campaign=na-2018&utm_content=gray";
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
          <a Id="mlh-trust-badge" style={mlh} href={link} target="_blank"><img src={imgLink} alt="Major League Hacking 2017 Hackathon Season" style={mlhLogo} /></a>
				</NavItem>
			</Nav>
        </Navbar>
      </div>
    );
  }

}

export default MenuBar;
