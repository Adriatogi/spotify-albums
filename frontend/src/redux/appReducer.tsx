import { ADD_LABEL, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "./actions";

interface AppState {
    labels: string[]; // Assuming your state includes a list
}

const initialState: AppState = {
    labels: [],
};

const appReducer = (state = initialState, action: any): AppState => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                labels: action.payload,
            }
        case ADD_LABEL:
            return {
                ...state,
                labels: [...state.labels, action.payload],
            }
        default:
            return state;
    }
};

export default appReducer;