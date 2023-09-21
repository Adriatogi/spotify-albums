import { ADD_LABEL, FETCH_DATA_SUCCESS, SELECT_LABEL } from "./actions";

interface AppState {
    labels: string[]; // Assuming your state includes a list
    selectedLabel: string;
}

const initialState: AppState = {
    labels: [],
    selectedLabel: ''
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
        case SELECT_LABEL:
            return {
                ...state,
                selectedLabel: action.payload
            }
        default:
            return state;
    }
};

export default appReducer;