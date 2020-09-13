import React from 'react';
import PropTypes from 'prop-types';
import styles from './homePage.module.css';

class HomePage extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
