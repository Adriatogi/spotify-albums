export const ADD_LABEL = 'ADD_TO_LIST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const addLabel = (item: string) => ({
    type: ADD_LABEL,
    payload: item,
});

const fetchDataSuccess = (data: any) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
});

export const fetchData = () => {
    return async (dispatch: any) => {
        try {
            const response = await fetch("/labels", {
                method: 'GET'
            })

            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data)
            dispatch(fetchDataSuccess(data.labels));
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
        dispatch(fetchData())
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
        dispatch(fetchData())
    }
}


