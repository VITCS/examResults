import React from 'react';
import PropTypes from 'prop-types';
import styles from './banner.module.css';
import logo from "../../images/logo_ico.png";

class Banner extends React.Component {
  render() {
    return <div class={styles.header}>
      <h1 class={styles.h1}>
                    <img id="logo" src={logo} alt="Logo"/>
                      <span>AU <small>EXAMINATIONS COMPUTERISATION SYSTEM</small></span>
                      </h1>
    </div>;
  }
}
Banner.propTypes = {};

Banner.defaultProps = {};

export default Banner;
