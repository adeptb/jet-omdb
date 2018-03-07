import React from 'react';
import MovieListItem from './MovieListItem';

export default class MovieList extends React.PureComponent{
    render(){
        const {movies} = this.props;
        return <div>
            {movies.map(movie => {
                return <MovieListItem 
                    key={`${movie.get('imdbID')}`} 
                    movie={movie}/>
            })}
        </div>
    }
}