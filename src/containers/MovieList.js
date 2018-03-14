import React from 'react';
import {connect} from 'react-redux';
import * as selectors from '../selectors/movieList';
import MovieListItem from './MovieListItem';


class MovieList extends React.PureComponent{
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

const mapStateToProps = (state) => {
    return {
        movies: selectors.getMovies(state)
    }
}

export default connect(mapStateToProps)(MovieList);