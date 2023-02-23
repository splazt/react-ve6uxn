import React from 'react';
import './style.css';
import { increase, decrease } from './index.js';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  return (
    <div>
      <h1>{`Count: ${state}`}</h1>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
    </div>
  );
}
