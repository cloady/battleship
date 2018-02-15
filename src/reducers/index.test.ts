import reducer, { initialState } from './index';
import { expect } from 'chai';

it('should return the initial state', () => {
    expect(reducer(undefined, { type: null })).to.be.equal(initialState);
});