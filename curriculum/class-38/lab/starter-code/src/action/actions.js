export const DRINK_COFFEE = 'DRINK_COFFEE';
export const drinkCoffee = (state) =>({ ...state,
  type: DRINK_COFFEE, name: 'coffees', count: state.coffees
});

export const EAT_SNACK = 'EAT_SNACK';
export const eatSnack = (state) => ({ ...state,
  type: EAT_SNACK, name: 'snacks', count: state.snacks
});

export const TAKE_NAP = 'TAKE_NAP';
export const takeNap = (state) => ({ ...state,
  type: TAKE_NAP, name:'naps', count: state.naps
});

export const STUDY = 'STUDY';
export const study = (state) => ({ ...state,
  type: STUDY, name:'study', count: state.studies
});
