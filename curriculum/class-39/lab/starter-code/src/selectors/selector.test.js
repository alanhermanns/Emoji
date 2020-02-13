import {
  isEducated,
  isHungry,
  isTired,
  isHyper
} from './selectors';
    
describe('selectors', () => {
  it('should know whats up', () => {
    let state = { 
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0   
    };
    expect(isTired(state)).toBeTruthy();
  });
  it('should know whats down', () => {
    let state = { 
      coffees: 5,
      snacks: 0,
      naps: 0,
      studies: 0   
    };
    expect(isHyper(state)).toBeTruthy;
  });
  it('should return more naps', () => {
    let state = { 
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 7   
    };
    expect(isEducated(state)).toBeTruthy();
  });
  it('should return more studies', () => {
    let state = { 
      coffees: 1,
      snacks: 0,
      naps: 1,
      studies: 4  
    };
    expect(isHungry(state)).toBeTruthy();
  });
});
  
    
  
