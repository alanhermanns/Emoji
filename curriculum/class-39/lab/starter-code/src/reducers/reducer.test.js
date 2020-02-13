import {
  DRINK_COFFEE,
  drinkCoffee,
  EAT_SNACK,
  eatSnack,
  TAKE_NAP,
  takeNap,
  STUDY,
  study
} from '../actions/actions';
import reducer from './reducer';
  
describe('reducer', () => {
  it('should return more coffees', () => {
    let state = { 
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0   
    };
    expect(reducer(state, drinkCoffee())).toEqual({ 'coffees': 1, 'naps': 0, 'snacks': 0, 'studies': 0 });
  });
  it('should return more snacks', () => {
    let state = { 
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0   
    };
    expect(reducer(state, eatSnack())).toEqual({ 'coffees': 0, 'naps': 0, 'snacks': 1, 'studies': 0 });
  });
  it('should return more naps', () => {
    let state = { 
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0   
    };
    expect(reducer(state, takeNap())).toEqual({ 'coffees': 0, 'naps': 1, 'snacks': 0, 'studies': 0 });
  });
  it('should return more studies', () => {
    let state = { 
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0   
    };
    expect(reducer(state, study())).toEqual({ 'coffees': 0, 'naps': 0, 'snacks': 0, 'studies': 1 });
  });
});

  
