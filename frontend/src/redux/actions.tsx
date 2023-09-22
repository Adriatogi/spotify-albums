export const FETCH_LABEL_SUCCESS = 'FETCH_DATA_SUCCESS';
export const SET_LABEL_ALBUMS = 'SET_LABEL_ALBUMS'
export const ADD_USER_ALBUMS = 'ADD_USER_ALBUMS'
export const SELECT_LABEL = 'SELECT_LABEL';
export const ADD_LABEL = 'ADD_TO_LIST';
export const CLEAR_LABEL_ALBUMS = 'CLEAR_LABEL_ALBUMS'

export const addLabel = (item: string) => ({
    type: ADD_LABEL,
    payload: item,
});

export const selectLabel = (item: string) => ({
    type: SELECT_LABEL,
    payload: item
})

const fetchLabelsSuccess = (data: any) => ({
    type: FETCH_LABEL_SUCCESS,
    payload: data,
});

const fetchLabelAlbumsSuccess = (data: any) => ({
    type: SET_LABEL_ALBUMS,
    payload: data
})

const fetchUserAlbumsSuccess = (data: any) => ({
    type: ADD_USER_ALBUMS,
    payload: data
})

const clearLabelAlbum = () => ({
    type: CLEAR_LABEL_ALBUMS,
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

export const deleteLabel = (label: any) => {
    return async (dispatch: any) => {
        try {
            const response = await fetch("/labels/" + label, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

        } catch (error) {
            console.log('error: ', error)
        }
        dispatch(fetchLabels())
        dispatch(clearLabelAlbum())
        dispatch(selectLabel(''))
    }
}

export const fetchLabelAlbums = (label: any) => {
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
            dispatch(fetchLabelAlbumsSuccess(data.albums))

        } catch (error) {
            console.log('error: ', error)
        }
    }
}

export const fetchUserAlbums = (level: any) => {
    return async (dispatch: any) => {
        try {
            console.log("fetch user", level)
            const response = await fetch("/albums/user/" + level, {
                method: 'GET',
            })

            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

            const data = await response.json();
            console.log("user albums", data.albums)
            dispatch(fetchUserAlbumsSuccess(data.albums))

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

        dispatch(fetchLabelAlbums(formData.get('label')))
    }
}

export const deleteMap = (formData: any) => {
    return async (dispatch: any) => {
        try {
            const response = await fetch("/maps", {
                method: 'DELETE',
                body: formData
            })

            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

        } catch (error) {
            console.log('error: ', error)
        }

        dispatch(fetchLabelAlbums(formData.get('label')))
    }
}