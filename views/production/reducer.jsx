import { createActions, handleActions,combineActions } from 'redux-actions';

const defaultState = { counter: 10 };

const { increment, decrement } = createActions({
    INCREMENT: (amount = 1) => ({ amount }),
    DECREMENT: (amount = 1) => ({ amount: -amount })
});

const reducer = handleActions(
    {
        [combineActions(increment, decrement)]: (
            state
        ) => {
            return { ...state, counter: state.counter + 1 };
        }
    },
    defaultState
);

export default reducer;