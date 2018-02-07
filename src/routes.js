
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router';

import App from './Containers/App';
import actions from './Containers/App/actions';


class Routes extends Component {
  onEnter = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const tweets = JSON.parse(localStorage.getItem('tweets'));
    if (userData) this.props.oAuthSuccessVerify(userData);
    if (tweets) this.props.tweets(tweets);
  }
  render() {
    return (
      <Router history={this.props.history} onUpdate={this.onEnter}>
        <Route path="/" component={App}>
          <Route path="success" onEnter={this.props.oAuthSuccessRedirect} />
          <Route path="failure" onEnter={this.props.oAuthFailure} />
        </Route>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  oAuthSuccessRedirect: () => dispatch(actions.template.oAuthSuccessRedirect()),
  oAuthSuccessVerify: userData => dispatch(actions.template.oAuthSuccessVerify(userData)),
  oAuthFailure: () => dispatch(actions.template.oAuthFailure()),
  tweets: tweets => dispatch(actions.template.saveTweets(tweets)),
});

Routes.propTypes = {
  oAuthSuccessVerify: PropTypes.func.isRequired,
  tweets: PropTypes.func.isRequired,
  oAuthSuccessRedirect: PropTypes.func.isRequired,
  oAuthFailure: PropTypes.func.isRequired,
  history: PropTypes.shape({
    createHref: PropTypes.func.isRequired,
    createKey: PropTypes.func.isRequired,
    createLocation: PropTypes.func.isRequired,
    createPath: PropTypes.func.isRequired,
    getCurrentLocation: PropTypes.func.isRequired,
    go: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    goForward: PropTypes.func.isRequired,
    listen: PropTypes.func.isRequired,
    listenBefore: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
    replace: PropTypes.array,
    transitionTo: PropTypes.func.isRequired,
    unsubscribe: PropTypes.func.isRequired,
  }).isRequired,
};


export default connect(null, mapDispatchToProps)(Routes);
