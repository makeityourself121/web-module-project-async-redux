import axios from 'axios'

export const getData = () => {
    return (dispatch) => {
        dispatch(fetchStart())
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(res=>{
            
            dispatch(fetchSuccess(res.data))
        })
        .catch(err=>{
            dispatch(fetchFail(err))
        })
    }
}

export const FETCH_DATA = "FETCH_START";
export const fetchStart = ()=> {
    return({type: FETCH_DATA});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (dish)=> {
    return({type: FETCH_SUCCESS, payload: dish});
}

export const FETCH_FAIL = "FETCH_FAIL";
export const fetchFail = (error)=> {
    return({type: FETCH_FAIL, payload: error});
}