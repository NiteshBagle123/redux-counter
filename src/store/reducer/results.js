import * as actionTypes from '../action';

const initialState = {
    results: []
};
const reducer = (state = initialState, action) => {
    const { STORE_RESULT, DELETE_RESULT } = actionTypes;
    switch(action.type) {        
        case STORE_RESULT:         
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result })
            }
        
        case DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1); 
            const updatedArray = state.results.filter(result => result.id !== action.resultId)        
            return {
                ...state,
                results: updatedArray
            }
    }

    return state;
}

export default reducer;
