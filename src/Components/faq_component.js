import React, { Component } from 'react';
import { Button, Row, Col, Panel, Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import '../Assets/faq.css';

class Faq_component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: undefined,
      paragraph: undefined,
      view: false,
      extend: '+'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(){
    let title = this.props.title;
    this.setState({
      title: title
    });
  }

  handleClick() {
    if(this.state.view == false) {
      this.setState({
        view: true,
        extend: '-',
        paragraph: this.props.paragraph,
      });
    } else {
      this.setState({
        view: false,
        extend: '+',
        paragraph: undefined
      })
    }
  }

  render() {
    return(
      <div className="App">
        <div className="bounding_box">
          <Row>
            <Col md="2">
              <a onClick={this.handleClick} className="theplus_thingy">{this.state.extend}</a>
            </Col>
            <Col md="10">
              <h4>{this.state.title}</h4>
            </Col>
          </Row>
          <Row>
            <Col md="3">
            </Col>
            <Col md="9">
                <p>{this.state.paragraph}</p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}


export default Faq_component;
