import React from 'react';
import PropTypes from 'prop-types';
import styles from './menu.module.css';
import {Navbar,Nav} from 'react-bootstrap';
import HomeIcon from '@material-ui/icons/Home';

class Menu extends React.Component {
  render() {
    return <div><Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Nav className="mr-auto">
        <HomeIcon color="primary" style={{ fontSize: 35 }}/>
        <Nav.Link href="#features">SERVICES</Nav.Link>
        <Nav.Link href="#pricing">RUSULTS</Nav.Link>
        <Nav.Link href="#pricing">PG Login</Nav.Link>
        <Nav.Link href="#features">UG Login</Nav.Link>
        <Nav.Link href="#pricing">REVALUATION</Nav.Link>
        <Nav.Link href="#features">CHALLAN PAYMENT</Nav.Link>
        <Nav.Link href="#pricing">TUTION FEE PAYMENT</Nav.Link>
        <Nav.Link href="#features">CONTACT US</Nav.Link>
      </Nav>
  </Navbar>
  </div>;
  }
}
Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;

