import {fromJS, Map} from 'immutable';
import * as constants from '../constants';

const initialState = fromJS({
    isLoading: false,
    movie: {}
})

const movieCardReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case constants.GET_MOVIE_CARD_REQUEST:{
            return state.set('isLoading', true);
        }
        case constants.GET_MOVIE_CARD_SUCCESS:{
            return state
                .set('isLoading', false)
                .set('movie', fromJS(payload.movie));
        }
        default: 
            return state;
    }
        
}

export default movieCardReducer;