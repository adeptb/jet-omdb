import * as constants from '../constants';

export const getMovieCardRequest = () => {
    return {
        type: constants.GET_MOVIE_CARD_REQUEST,

    }
}

export const getMovieCardSuccess = (movie) => {
    return {
        type: constants.GET_MOVIE_CARD_SUCCESS,
        payload: {
            movie
        }
    }
}