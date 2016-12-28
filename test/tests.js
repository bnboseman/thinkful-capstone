const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
const {app} = require('../server');
chai.should();
chai.use(chaiHttp);

describe('STL Share resource', () => {
  describe('GET endpoint', () => {
    it('should return 200 on root', done => {
      chai.request(app)
      .get('/')
      .then(_response => {
        _response.should.have.status(200);
        done();
      });
    });
  });
});
