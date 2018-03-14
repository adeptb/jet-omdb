import * as constants from '../constants';

export const getMoviesRequest = (page, search) => {
    return {
        type: constants.GET_MOVIES_REQUEST,
        payload: {
            page,
            search  
        }  
    }
}

export const getMoviesSuccess = (movies) => {
    return {
        type: constants.GET_MOVIES_SUCCESS,
        payload: {
           movies
        }  
    }
}