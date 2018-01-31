import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from './actions';

import styles from './styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <a href={`${process.env.API_BASE_URL}/oauth_request`}>LOGIN HERE</a>
        <h2 onClick={this.props.getUserData}>Get Data</h2>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  getUserData: () => dispatch(actions.template.getUserData()),
  getTweets: () => dispatch(actions.template.getTweets()),
  disconnect: () => dispatch(actions.template.disconnect()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
