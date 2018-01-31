import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TweetList from '../../Components/TweetList';
import actions from './actions';

import styles from './styles.css';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        {this.props.error ? <span> Error: {this.props.error} </span> : null}
        { this.props.isLoggedIn ? (
          <div>
            <h2>Display Name: {this.props.userData.displayName}</h2>
            <h2>User Name: {this.props.userData.username}</h2>
            <img className={styles.img} src={this.props.userData.photos[0].value} alt="User" />
            <button type="button" onClick={this.props.getTweets} >Refresh Tweets</button>
            <button type="button" onClick={this.props.disconnect} >Logout</button>
            <TweetList tweets={this.props.tweets} />
          </div>
        ) : (
          <a className={styles.loginButton} href={`${process.env.API_BASE_URL}/oauth_request`}>
            LOGIN WITH TWITTER
          </a>
        )}
      </div>
    );
  }
}


App.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.object),
  userData: PropTypes.shape({
    displayName: PropTypes.string,
    username: PropTypes.string,
    photos: PropTypes.array,
  }),
  isLoggedIn: PropTypes.bool,
  error: PropTypes.string,
  getTweets: PropTypes.func.isRequired,
  disconnect: PropTypes.func.isRequired,
};

App.defaultProps = {
  tweets: [],
  userData: {},
  isLoggedIn: false,
  error: null,
};

const mapStateToProps = state => ({
  tweets: state.applicationReducer.get('tweets'),
  userData: state.applicationReducer.get('userData'),
  isLoggedIn: state.applicationReducer.get('isLoggedIn'),
  error: state.applicationReducer.get('error'),
});

const mapDispatchToProps = dispatch => ({
  getTweets: () => dispatch(actions.template.getTweets()),
  disconnect: () => dispatch(actions.template.disconnect()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
