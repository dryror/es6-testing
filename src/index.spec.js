/* eslint-env mocha */
import expect from 'expect';
import { init } from './index';

describe('index.js: init()', () => {
  beforeEach(() => {
    document.body.insertAdjacentHTML('afterbegin', '<div id="root"></div>');
  });

  afterEach(() => {
    document.body.removeChild(document.getElementById('root'));
  });

  it('should return the root element', () => {
    const el = init('root');
    expect(el).toExist();
  });

  it('should have textContent set', () => {
    const el = init('root');
    expect(el.textContent).toBe('Hello, world');
  });

  it('should return null for not existant elements', () => {
    const el = init('foo');
    expect(el).toBe(null);
  });
});
