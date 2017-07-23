import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ping from '../actions/users';
// components
import H1 from '../components/headings/h1';
import Button from '../components/buttons'

const Home = ({ isPinging, ping }) => (
  <div>
    <H1 isPinging={isPinging.toString()} />
    <Button btnText="Start Ping" ping={ping} />
  </div>
);

Home.propTypes = {
  isPinging: PropTypes.bool.isRequired,
  ping: PropTypes.func.isRequired
};

Home.defaultTypes = {
  isPinging: false
}

export default connect(
  ({ isPinging }) => ({ isPinging }),
  { ping }
)(Home);
