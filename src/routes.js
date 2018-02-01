
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router';

import App from './Containers/App';
import actions from './Containers/App/actions';


class Routes extends Component {
  onEnter = (enter) => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const tweets = JSON.parse(localStorage.getItem('tweets'));
    if (userData) this.props.oAuthSuccessVerify(userData);
    if (tweets) this.props.tweets(tweets);

  }
  render() {
    return (
      <Router history={this.props.history} onUpdate={this.onEnter}>
        <Route path="/" component={App}>
          <Route path="success" onEnter={this.props.oAuthSuccessRedirect}/>
          <Route path="failure" onEnter={this.props.oAuthFailure} />
        </Route>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  oAuthSuccessRedirect: () => dispatch(actions.template.oAuthSuccessRedirect()),
  oAuthSuccessVerify: (userData) => dispatch(actions.template.oAuthSuccessVerify(userData)),
  oAuthFailure: () => dispatch(actions.template.oAuthFailure()),
  tweets: (tweets) => dispatch(actions.template.saveTweets(tweets))
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
