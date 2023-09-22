export const ADD_LABEL = 'ADD_TO_LIST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const SELECT_LABEL = 'SELECT_LABEL';
export const SET_ALBUMS = 'SET_ALBUMS'

export const addLabel = (item: string) => ({
    type: ADD_LABEL,
    payload: item,
});

export const selectLabel = (item: string) => ({
    type: SELECT_LABEL,
    payload: item
})

const fetchLabelsSuccess = (data: any) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
});

const getLabelAlbumsSuccess = (data: any) => ({
    type: SET_ALBUMS,
    payload: data
})

export const fetchLabels = () => {
    return async (dispatch: any) => {
        try {
            const response = await fetch("/labels", {
                method: 'GET'
            })

            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

            const data = await response.json();
            dispatch(fetchLabelsSuccess(data.labels));
        } catch (error) {
            console.log('error: ', error)
        }
    }
}

export const postLabel = (formData: any) => {
    return async (dispatch: any) => {
        try {
            const response = await fetch("/labels", {
                method: 'POST',
                body: formData
            })

            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

        } catch (error) {
            console.log('error: ', error)
        }
        dispatch(fetchLabels())
    }
}

export const getLabelAlbums = (label: any) => {
    return async (dispatch: any) => {
        try {
            const response = await fetch("/albums/" + label, {
                method: 'GET',
            })

            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

            const data = await response.json();
            console.log("albums", data.albums)
            dispatch(getLabelAlbumsSuccess(data.albums))

        } catch (error) {
            console.log('error: ', error)
        }
    }
}

export const postMap = (formData: any) => {
    return async (dispatch: any) => {
        try {
            const response = await fetch("/maps", {
                method: 'POST',
                body: formData
            })

            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

        } catch (error) {
            console.log('error: ', error)
        }

        dispatch(getLabelAlbums(formData['label']))
    }
}
