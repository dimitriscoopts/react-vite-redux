import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementAsync, incrementByAmount, init } from "../state/features/counter/counterSlice";

export default function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <>
        <div>{count}</div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>Increment By 10</button>
        <button onClick={() => dispatch(incrementAsync(5))}>Increment By 5 (Async)</button>
        <button onClick={() => dispatch(init())}>Initialise</button>
    </>
  )
}
