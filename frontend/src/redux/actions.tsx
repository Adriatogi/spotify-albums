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

const fetchDataFailure = (error: any) => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
});

export const fetchData = () => {
    return async (dispatch: any) => {
        fetch("/labels", {
            method: 'GET', // You can use other HTTP methods like POST, PUT, etc.
        })
            .then((res) => res.json())
            .then((data) => {
                // handle labels
                console.log(data)
                dispatch(fetchDataSuccess(data.labels));
            })
            .catch((error) => {
                console.log('error: ', error)
            });
    }
}


