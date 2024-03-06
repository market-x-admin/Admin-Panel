import * as actionTypes from '../actions/actionTypes';

const initialState = {
    tables: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.getTables:
            return{
                ...state,
                tables: action.payload
            }
    }
    return state;
}

export default reducer;