import * as actionTypes from '../action';

const initialState = {
    counter: 0
};
const reducer = (state = initialState, action) => {
    const { INCREMENT, DECREMENT, ADD, SUBTRACT } = actionTypes;
    switch(action.type) {
        case INCREMENT:         
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:         
            return {
                ...state,
                counter: state.counter - 1
            }

        case ADD:         
            return {
                ...state,
                counter: state.counter + action.value
            }
        
        case SUBTRACT:         
            return {
                ...state,
                counter: state.counter - action.value
            }
    }

    return state;
}

export default reducer;
