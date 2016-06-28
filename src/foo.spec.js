/* eslint-env mocha */
import expect from 'expect';
import { bar } from './foo';

describe('foo.js: bar()', () => {
  it('should double input', () => {
    expect(bar(2)).toBe(4);
  });
});
