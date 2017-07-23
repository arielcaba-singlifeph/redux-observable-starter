import React from 'react';
import PropTypes from 'prop-types';

const H1 = (props) => (
  <h1>{props.isPinging}</h1>
);

H1.propTypes = {
  isPinging : PropTypes.string.isRequired
};

export default H1;
