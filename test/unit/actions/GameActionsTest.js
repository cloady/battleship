import { expect } from '../testHelper';
import GameActions, { shootCell, getLayout } from '../../../src/client/assets/javascripts/features/game/actions';

describe('Actions', () => {

  describe('shootCell', () => {
    it('has the correct type', () => {
      const action = shootCell(0, 0);
      expect(action.type).to.equal(GameActions.SHOOT_CELL);
    });
  });

  describe('getLayout', () => {
    it('has the correct type', () => {
      const action = getLayout();
      expect(action.type).to.equal(GameActions.GET_LAYOUT);
    });
  });

});
