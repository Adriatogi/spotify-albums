import { ADD_LABEL, FETCH_DATA_SUCCESS, SELECT_LABEL, SET_ALBUMS } from "./actions";

interface albumInfo {
    name: string;
    id: string;
    img_url: string;
}

interface AppState {
    labels: string[]; // Assuming your state includes a list
    selectedLabel: string;
    labelAlbums: albumInfo[];
    userAlbums: albumInfo[];
}

const initialState: AppState = {
    labels: [],
    selectedLabel: '',
    labelAlbums: [],
    userAlbums: []
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
        case SET_ALBUMS:
            return {
                ...state,
                labelAlbums: action.payload
            }
        default:
            return state;
    }
};

export default appReducer;