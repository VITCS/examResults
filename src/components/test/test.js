import React from 'react';
import PropTypes from 'prop-types';
import styles from './test.module.css';

const test = () => (
  <div className={styles.test}>
    test Component
  </div>
);

test.propTypes = {};

test.defaultProps = {};

export default test;
