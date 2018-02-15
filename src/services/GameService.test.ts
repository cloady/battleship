import GameService  from './GameService';
import { expect } from 'chai';

it('shootCell method return promise', () => {
    expect(GameService.shootCell([0, 0])).to.be.an.instanceOf(Promise);
});

it('getLayout method return promise', () => {
    expect(GameService.getLayout()).to.be.an.instanceOf(Promise);
});