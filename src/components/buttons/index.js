import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ ping, btnText }) => (
  <div>
    <button onClick={ping}>{btnText}</button>
  </div>
);

Button.propTypes = {
  ping : PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired
};

export default Button;
