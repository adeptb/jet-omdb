import {fromJS} from 'immutable';
import * as constants from '../constants';

const initialState = fromJS({
    movies: [],
    page: 1,
    search: '',
    isLoading: false
})

const movieListReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case constants.GET_MOVIES_REQUEST: {
            return state
                .set('isLoading', true)
                .set('page', payload.page);
        }
        case constants.GET_MOVIES_SUCCESS: {
            return state
                .set('isLoading', false)
                .update('movies', movies => movies.merge(fromJS(payload.movies)))
        }
        default: 
            return state;
    }
        
}

export default movieListReducer;