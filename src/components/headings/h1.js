import React from 'react';
import PropTypes from 'prop-types';

const H1 = ({isPinging}) => (
  <h1>{isPinging}</h1>
);

H1.propTypes = {
  isPinging : PropTypes.string.isRequired
};

export default H1;
