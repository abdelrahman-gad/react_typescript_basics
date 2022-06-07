// practising useReducer hook to manage state
import { useReducer } from 'react';
const initialState = { count: 0 }
type CounterState = { count: number };

type UpdateAction = {
    type:'increment'|'decrement',
    payload:number
}
type ResetAction = {
    type:'reset'
}
type CounterAction = UpdateAction | ResetAction; 

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
        case 'reset':
            return initialState;
        default:
              return state;

    }
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return <>

        Count : {state.count}

        <button onClick={() => dispatch({ type: 'increment', payload: 10 })} >Increment by 10</button>
        <button onClick={() => dispatch({ type: 'decrement', payload: 10 })} >Decrement by 10</button>

        <button onClick={() => dispatch({ type: 'reset'})} >Reset</button>

    </>

}

export default Counter;