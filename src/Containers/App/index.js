import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>HELLO</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
