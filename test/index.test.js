import chai from "chai";

const { expect } = chai;

import { calculate } from '../index.js';

describe('calculate', function () {
  it('should return 15 when input is — add 2, multiply 3 & apply 3', function () {
    expect(calculate('add 2\nmultiply 3\napply 3')).to.equal(15);
  });
  it('should return 45 when input is — multiply 9 & apply 5', function () {
    expect(calculate('multiply 9\napply 5')).to.equal(45);
  });
  it('should return 1 when only apply instuction given', function () {
    expect(calculate('apply 1')).to.equal(1);
  });
});
