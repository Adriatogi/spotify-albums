import {
    ADD_LABEL, FETCH_LABEL_SUCCESS, SELECT_LABEL,
    SET_LABEL_ALBUMS, ADD_USER_ALBUMS, CLEAR_LABEL_ALBUMS
} from "./actions";

interface albumInfo {
    name: string;
    id: string;
    img_url: string;
}

interface AppState {
    labels: string[];
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
        case FETCH_LABEL_SUCCESS:
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
        case SET_LABEL_ALBUMS:
            return {
                ...state,
                labelAlbums: action.payload
            }
        case ADD_USER_ALBUMS:
            return {
                ...state,
                userAlbums: [...state.userAlbums, ...action.payload],
            }
        case CLEAR_LABEL_ALBUMS:
            return {
                ...state,
                labelAlbums: []
            }
        default:
            return state;
    }
};

export default appReducer;