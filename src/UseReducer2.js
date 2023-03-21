import React, { useReducer } from "react";

export const initialState = {enemyHitPoints: 100};

export function reducer (state, action) {
    switch (action.type) {
        case 'attack':
            return {enemyHitPoints: state.enemyHitPoints - 10};
        default:
            throw new Error();
    }
}

function App8 () {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <label> Count: {state.enemyHitPoints}</label>
            <button onClick={() => dispatch({ type: 'attack' })}>Attack</button>
        </div>
    )
}

export default App8;