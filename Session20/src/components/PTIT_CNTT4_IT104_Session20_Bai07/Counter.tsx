import React, { useReducer, useState } from 'react'

export default function Counter() {
    const initial = {
        count: 0,
    }
    const reduct = (state: any, action: any) => {
        switch (action.type) {
            case "Increace":
                return {count: state.count + action.payload};
            case "Decreace":
                return {count: state.count - action.payload};
        }
    }
    const [num, dispatch] = useReducer(reduct, initial);
    const handleIncreace = () => {
        dispatch({type: "Increace", payload: 1});
    }
    const handleDecreace = () => {
        dispatch({type: "Decreace", payload: 1})
    }

  return (
    <div>
      <h2>So dem: {num?.count}</h2>
      <button onClick={handleIncreace}>Tang</button> &nbsp;
      <button onClick={handleDecreace}>Giam</button>
    </div>
  )
}
