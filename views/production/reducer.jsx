const COUNTER_INCREMENT = 'INCREMENT';
const COUNTER_DECREMENT = 'DECREMENT';



export const increment = ({num}) => ({
    type: COUNTER_INCREMENT,
    num:num
});
export const decrement = () => ({
    type: COUNTER_DECREMENT,
});

export default (state = 0, action) => {
    console.log("action",action)
    switch (action.type) {
        case COUNTER_INCREMENT:
            return state + action.num;
        case COUNTER_DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

export const getCounter = state => state.counter;