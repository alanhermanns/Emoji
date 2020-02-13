import {
  DRINK_COFFEE,
  drinkCoffee,
  EAT_SNACK,
  eatSnack,
  TAKE_NAP,
  takeNap,
  STUDY,
  study
} from './actions';

describe('actions', () => {
  it('should return type study', () => {
    expect(study().type).toEqual(STUDY);
  });
});
it('should return type EAT_SNACK', () => {
  expect(eatSnack().type).toEqual(EAT_SNACK);
});
it('should return type DRINK_COFFEE', () => {
  expect(drinkCoffee().type).toEqual(DRINK_COFFEE);
});
it('should return type TAKE_NAP', () => {
  expect(takeNap().type).toEqual(TAKE_NAP);
});

