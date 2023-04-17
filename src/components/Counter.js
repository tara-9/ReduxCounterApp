import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
  const counter = useSelector(store => store.counter)
  const show = useSelector(store => store.showCounter)
  const disPatch = useDispatch()
  
  const incrementButtonHandler = () => {
    disPatch({type:'increment'})
  }

  const decrementButtonHandler = () => {
    disPatch({type:'decrement'})
  }

  const increaseHandler = () => {
    disPatch({type:'increase', amount:5})
  }
  const toggleCounterHandler = () => {
    disPatch({type:'toggle'})
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
