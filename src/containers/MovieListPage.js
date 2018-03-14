import React from 'react';
import {List, Map, fromJS} from 'immutable';
import MovieListHeader from './MovieListHeader';
import MovieList from './MovieList';
import {searchMovies} from '../api';
 
export default class MovieListPage extends React.PureComponent{
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <MovieListHeader/>
            <MovieList/>
        </div>
    }
}