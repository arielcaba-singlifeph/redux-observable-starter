import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ping from '../../actions/users';

const Button = ({ ping, btnText }) => (
  <div>
    <button onClick={ping}>{btnText}</button>
  </div>
);

Button.propTypes = {
  ping : PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired
};

export default connect(
  ({ isPinging }) => ({ isPinging }),
  { ping },
)(Button);
