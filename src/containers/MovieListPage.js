import React from 'react';
import {List, Map, fromJS} from 'immutable';
import MovieListHeader from './MovieListHeader';
import MovieList from './MovieList';
import {searchMovies} from '../api';
 
export default class MovieListPage extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            movies: List(),
            search: Map({page: 1}),
        }
    }

    onSearchHandler = (search) => {
        this.setState({
            search: this.state.search.set('value', search)
        }, this.loadMovies);
    }

    loadMovies(){
        const {search} = this.state;
        searchMovies({
            search: search.get('value'),
            page: search.get('page')
        }).then(response => this.setState({movies: fromJS(response.data.Search)}));
    }

    render(){
        const {movies} = this.state;
        return <div>
            <MovieListHeader onSearch={this.onSearchHandler}/>
            <MovieList movies={movies}/>
        </div>
    }
}