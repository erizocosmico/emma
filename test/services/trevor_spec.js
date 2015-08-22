require('es6-promise').polyfill();
require('isomorphic-fetch');

import expect from 'expect';
import { setConfig } from '../../src/config';
import trevor from '../../src/services/trevor';
import http from 'http';

describe('trevor', () => {
  let server;
  let body = '';
  let response = {
    error: false,
    type: 'translator',
    data: 'foo'
  };

  before(() => {
    setConfig({
      trevorUrl: 'http://127.0.0.1:9090/trevor'
    });

    server = http.createServer((req, res) => {
      req.on('data', data => {
        body += data;
      });

      req.on('end', () => {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(response));
      });
    });
    server.listen(9090);
  });

  after(() => {
    server.close()
  });

  it('should send the input and return a response', done => {
    trevor('foo').then((data) => {
      expect(data).toEqual(response);
      expect(body).toBe('{"input":"foo"}');
      done();
    });
  });
});
