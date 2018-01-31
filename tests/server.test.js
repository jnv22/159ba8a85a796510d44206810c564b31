import 'babel-polyfill'

const express = require('express');
const chai = require('chai');
const dotenv = require('dotenv');

dotenv.config();

const assert = chai.assert;
const superagent = require('superagent');
const routes = require('../server/routes');

describe('Server Tests', () => {
  let server;
  const app = express();
  const BASE_PATH = `${process.env.BASE_URL}:${process.env.PORT}`;

  const ROUTE_PATH = '/api/v1';
  app.use(ROUTE_PATH, routes);

  before(() => {
    server = app.listen(process.env.PORT);
  });

  after(() => {
    server.close();
  });

  it ('passes health check', function(done) {
    const url = `${BASE_PATH}${ROUTE_PATH}/health`
    superagent.get(url, (error, res) => {
      if (error) {
        return done(error);
      }
      assert.equal(res.status, 200);
      done();
    });
  })

  it('Unauthorized fetch tweets for User', function (done) {
    const url = `${BASE_PATH}${ROUTE_PATH}/tweets`
    superagent.get(url, (error, res) => {
      assert.equal(res.status, 401);
      done();
    });
  });
})