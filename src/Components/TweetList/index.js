import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

class TweetList extends Component {
  render() {
    return (
      <div>
        {this.props.tweets ? (
          <ul className={styles.list}>
            {
              this.props.tweets.map(tweet => (
                <li key={tweet.id}>
                  <p className={styles.date}>{tweet.created_at}</p>
                  <p className={styles.message}>{tweet.text}</p>
                </li>
              ))
            }
          </ul>
        ) : null}
      </div>
    );
  }
}

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.object),
};

TweetList.defaultProps = {
  tweets: [],
};

export default TweetList;
