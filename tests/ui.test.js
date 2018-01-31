import 'babel-polyfill'

import { expect, assert } from 'chai';
import { push } from 'react-router-redux';
import { call, put } from 'redux-saga/effects';
import { oAuthSuccessRedirect, oAuthFailureRedirect, tweets, disconnect } from '../src/Containers/App/saga';
import { fetchUserData, fetchTweets, logOut } from '../src/lib/api';
import actions from '../src/Containers/App/actions';
const done = {value: undefined, done: true};

describe('Saga Tests', () => {
  it('oAuthSuccessRedirectSuccess', () => {
    const saga = oAuthSuccessRedirect();
    expect(saga.next().value).to.deep.equal(call(fetchUserData));
    expect(saga.next().value).to.deep.equal(put(actions.template.error('Invalid Redirect')));
    expect(saga.next().value).to.deep.equal(put(push('/')));
    expect(saga.next()).to.deep.equal(done);
  });
  it('oAuthSuccessRedirectFail', () => {
    const saga = oAuthSuccessRedirect();
    expect(saga.next().value).to.deep.equal(call(fetchUserData));
    expect(saga.next().value).to.deep.equal(put(actions.template.error('Invalid Redirect')));
    expect(saga.next().value).to.deep.equal(put(push('/')));
    expect(saga.next()).to.deep.equal(done);
  });

  it('oAuthFailureRedirect', () => {
    const saga = oAuthFailureRedirect();
    expect(saga.next().value).to.deep.equal(put(push('/')));
    expect(saga.next()).to.deep.equal(done);
  });

  it('tweets', () => {
    const saga = tweets();
    expect(saga.next().value).to.deep.equal(call(fetchTweets));
    expect(saga.next().value).to.deep.equal(put(actions.template.error('Unable to fetch Tweets')));
    expect(saga.next()).to.deep.equal(done);
  });

  it('disconnect', () => {
    const saga = disconnect();
    expect(saga.next().value).to.deep.equal(call(logOut));
    saga.next();
    expect(saga.next()).to.deep.equal(done);
  });
});
