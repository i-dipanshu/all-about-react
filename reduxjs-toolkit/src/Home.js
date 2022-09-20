import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {
    const dispatch = useDispatch();
    const { c } = useSelector(state => state.custom)


    const add = () => {
        dispatch({type: "increment"})
    }

    const sub = () => {
        dispatch({type:"decrement"})
    }

    const addByValue = () => {
        dispatch({
          type: "incrementByValue",
          payload: 10
        });
    }
  return (
    <div>
        <h2>{c}</h2>
        <button onClick={add}>Increment</button>
        <button onClick={sub}>Decrement</button>
        <button onClick={addByValue}>Increment by value</button>
    </div>
  )
}

export default Home