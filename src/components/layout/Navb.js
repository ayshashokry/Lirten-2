import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

import '../../stylesheets/NavbCss.css';

export default class Navb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0,
      lastScrollY: 0,
      hidden: false,
      bgColor: 'nothing',
      border: 'white 1px solid'
    };
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      this.setState({ slide: '-60px', hidden: false, border: 'none' });
    } else if (currentScrollY === 0) {
      this.setState({
        hidden: false,
        bgColor: 'transparent',
        border: 'white 1px solid'
      });
    } else {
      this.setState({ slide: '0px', hidden: true, border: 'none' });
    }
    this.setState({ lastScrollY: currentScrollY });
  };

  render() {
    return (
      <Navbar
        className={' navb ' + (this.state.hidden ? 'showw' : 'hidden')}
        expand="lg"
        variant="dark"
        style={{
          borderBottom: `${this.state.border}`,
          background: `${this.state.bgColor}`,
          transform: `translate(0, ${this.state.slide})`,
          transition: ' .5s all'
        }}
      >
        <Navbar.Brand href="/">
          {' '}
          <img alt="lirtenLogo" src={require('../../images/lirten-icon.png')} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ background: `${this.state.bgColor}` }}
        >
          <Nav
            className="ml-auto "
            style={{ background: `${this.state.bgColor}` }}
          >
            <NavLink
              exact
              to="/"
              activeStyle={{ color: '#D0AD5E', fontWeight: '800' }}
            >
              HOME
            </NavLink>
            <NavLink
              exact
              to="Design"
              activeStyle={{ color: '#E5658D', fontWeight: '800' }}
            >
              L/ DESIGN
            </NavLink>
            <NavLink
              exact
              to="Code"
              activeStyle={{ color: '#20C4F4', fontWeight: '800' }}
            >
              L/ CODE
            </NavLink>
            <NavLink
              exact
              to="Manage"
              activeStyle={{ color: '#87499C', fontWeight: '800' }}
            >
              L/ MANAGE
            </NavLink>
            <NavLink
              exact
              to="ContactUs"
              activeStyle={{ color: '#D0AD5E', fontWeight: '800' }}
            >
              CONTACT US
            </NavLink>
            <NavLink
              className="joinUs"
              exact
              to="JoinUs"
              style={{ border: '1px solid white' }}
              activeStyle={{ color: '#D0AD5E', fontWeight: '800' }}
            >
              JOIN THE TEAM
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
