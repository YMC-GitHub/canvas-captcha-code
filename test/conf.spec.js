/* global describe, it, before */

import chai from 'chai';
import {RandomImg,block, paper} from '../src/conf.js';


chai.expect();

const expect = chai.expect;

let lib;

describe('test conf.js', () => {
  describe('when I need the l of block', () => {
    it('it should be a number', () => {
      expect(block.l).to.be.a('number');
    });
  });
  describe('when I need the r of block', () => {
    it('it should be a number', () => {
      expect(block.r).to.be.a('number');
    });
  });
   describe('when I need the L of block', () => {
    it('it should be a number', () => {
      expect(block.L).to.be.a('number');
    });
  });
  describe('when I need the w of paper', () => {
    it('it should be a number', () => {
      expect(paper.w).to.be.a('number');
    });
  });
  describe('when I need the h of paper', () => {
    it('it should be a number', () => {
      expect(paper.h).to.be.a('number');
    });
  });
  describe('when I need the host of RandomImg', () => {
    it('it should be a string', () => {
      expect(RandomImg.host).to.be.a('string');
    });
  });  
  describe('when I need the queryIDRange of RandomImg', () => {
    it('it should be a object', () => {
      expect(RandomImg.range).to.be.a('object');
    });
  }); 
  
  describe('when I need the L of block', () => {
    it('it should be a number and equal block.l+block.r*4 ', () => {
      expect(block.L).to.equal((block.l+block.r*4));
    });
  });

  
});