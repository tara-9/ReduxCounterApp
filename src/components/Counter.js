import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
  const counter = useSelector(store => store.counter)
  const disPatch = useDispatch()
  
  const incrementButtonHandler = () => {
    disPatch({type:'increment'})
  }

  const decrementButtonHandler = () => {
    disPatch({type:'decrement'})
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementButtonHandler}>Increment</button>
      <button onClick={decrementButtonHandler}>Decrement</button>
    </main>
  );
};

export default Counter;
