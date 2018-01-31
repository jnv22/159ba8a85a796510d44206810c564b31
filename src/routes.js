
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRedirect } from 'react-router';

// Pages
import App from './Containers/App';
import actions from './Containers/App/actions';


class Routes extends Component {
  onEnter = (enter) => {
    const userData = JSON.parse(localStorage.getItem('userData'))
    if (userData) this.props.oAuthSuccessVerify(userData)
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
