import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// components
import H1 from '../components/headings/h1';
import Button from '../components/buttons'

const Home = ({ isPinging }) => (
  <div>
    <H1 isPinging={isPinging.toString()} />
    <Button btnText="Start Ping" />
  </div>
);

Home.propTypes = {
  isPinging: PropTypes.bool.isRequired,
};

Home.defaultTypes = {
  isPinging: false
}

export default connect(
  ({ isPinging }) => ({ isPinging }),
)(Home);
