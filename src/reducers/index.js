import { combineReducers } from 'redux';
import movieList from './movieList';
import movieCard from './movieCard';

const reducers = combineReducers({
    movieList,
    movieCard
})

export default reducers;
