import 'babel-polyfill';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Root Endpoint', () => {
  describe('GET /', () => {
    it('should reach the root endpoint', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res.body.messages).eql('Welcome to Tech Skills Session');
          expect(res.status).to.equal(200);
          expect(res.body.status).eql('Ok');
          done();
        });
    });
    it('should return error status when invalid route is reached', (done) => {
      chai.request(app)
        .get('/helloworld')
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body.status).eql('Not Found');
          done();
        });
    });
  });
});
