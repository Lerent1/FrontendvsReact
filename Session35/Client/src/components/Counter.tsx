import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../store/slices/counterSlice';
import type { Data } from '../utils/types';

export default function Counter() {
    const result = useSelector((data: Data) => {
        return data.counter.value;
    });
    const dispatch = useDispatch();
    const increase = () => {
        dispatch(increment());
    }
    const decrease = () => {
        dispatch(decrement());
    }
    const resets = () => {
        dispatch(reset());
    }
    
  return (
    <div>
      Gia tri counter: {result}<br />
      <button onClick={increase}>increase</button> &nbsp;
      <button onClick={decrease}>decrease</button> &nbsp;
      <button onClick={resets}>reset</button>
    </div>
  )
}
