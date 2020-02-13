import React from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getFace } from '../selectors/selectors';


const Moods = () => {

  const dispatch = useDispatch();
  const face = useSelector(getFace);
  const { coffees, naps, studies, snacks } = useSelector(state => state);

  const handleDrinkCoffee = () => dispatch(drinkCoffee);
  const handleEatSnack = () => dispatch(eatSnack());
  const handleTakeNap = () => dispatch(takeNap());
  const handleStudy = () => dispatch(study());

  return (
      <>
        <Controls>
          <button onClick={handleDrinkCoffee}>coffees - {coffees}</button>
          <button onClick={handleEatSnack}>snacks - {snacks}</button>
          <button onClick={handleTakeNap}>naps - {naps}</button>
          <button onClick={handleStudy}>studies - {studies}</button>
        </Controls>
        <Face emoji={face} />
      </>
  );
};

export default Moods;
