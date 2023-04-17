import classes from './Counter.module.css';
import {counterActions} from '../store/index'
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
  const counter = useSelector(store => store.counter)
  const show = useSelector(store => store.showCounter)
  const disPatch = useDispatch()
  
  const incrementButtonHandler = () => {
    disPatch(counterActions.increment())
  }

  const decrementButtonHandler = () => {
    disPatch(counterActions.decrement())
  }

  const increaseHandler = () => {
    disPatch(counterActions.increase(5))
  }
  const toggleCounterHandler = () => {
    disPatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementButtonHandler}>Increment</button>
      <button onClick={increaseHandler}>Increse By 5</button>
      <button onClick={decrementButtonHandler}>Decrement</button>
    </main>
  );
};

export default Counter;
