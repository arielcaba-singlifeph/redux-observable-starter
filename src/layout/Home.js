import React from 'react';
import { connect } from 'react-redux';
import { ping } from './actions/users.js';
import './App.css';

let App = ({ isPinging = false, ping }) => (
  <div>
    <h1>is pinging: { String(isPinging) }</h1>
    <button onClick={ping}>Start PING</button>
  </div>
);

export default Home
