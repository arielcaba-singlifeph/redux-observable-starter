import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ping from '../../actions/users';

const Button = ({ ping }) => (
  <div>
    <button onClick={ping}>Start PING</button>
  </div>
);

Button.propTypes = {
  ping : PropTypes.func.isRequired
};

export default connect(
  ({ isPinging }) => ({ isPinging }),
  { ping },
)(Button);
