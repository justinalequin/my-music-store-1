import React, { useReducer } from 'react';

const INCREASE_ACTION_TYPE = 'increase';
const DECREASE_ACTION_TYPE = 'decrease';

const reducer = (state, action) => {

  if(action.type === INCREASE_ACTION_TYPE){
    return state + 1;
  } 

  if(action.type === DECREASE_ACTION_TYPE){
    return state - 1;
  }

  throw new Error('We dont know that type of action man!!')
};

const initialState = 0

const CounterPage = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <button onClick={() => dispatch({ type: DECREASE_ACTION_TYPE })}> - </button>
      </div>
        counter: {count}
      <div>
        <button onClick={() => dispatch({ type: INCREASE_ACTION_TYPE })}> + </button>
      </div>
    </div>
  )
};

export default CounterPage;
