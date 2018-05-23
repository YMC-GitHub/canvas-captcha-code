/* global describe, it, before */

import chai from 'chai';
import {PI} from '../src/const.js';


chai.expect();

const expect = chai.expect;


describe('test const.js', () => {
  describe('when I need the PI of Math.PI', () => {
    it('it should be a number', () => {
      expect(PI).to.be.a('number');
    });
  });
  describe('when I need the PI of Math.PI', () => {
    it('it should be a number and equals Math.PI', () => {
      expect(PI).to.be.equal(Math.PI);
    });
  });
  
});