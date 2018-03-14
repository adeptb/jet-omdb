import React from 'react';
import {connect} from 'react-redux';
import {findMovie} from '../api';
import * as selectors from '../selectors/movieCard';
import * as actions from '../actions/movieCard';

class MovieCardPage extends React.PureComponent{
    constructor(props){
        super(props); 
    }

    componentDidMount(){
        const {match, getMovieCardRequest, getMovieCardSuccess} = this.props;
        getMovieCardRequest();
        findMovie(match.params.id)
            .then(response => getMovieCardSuccess(response.data));
    }

    render() {
        const {movie, isLoading} = this.props;
        if(isLoading) {
            return <h1>Loading movie</h1>;
        } else {
            return <div>
                <h1>{movie.get('Title')}</h1>
                <p>{movie.get('Plot')}</p>
                <p>{movie.get('imdbRating')}</p>
                <img src={movie.get('Poster')}/>
            </div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        movie: selectors.getMovie(state),
        isLoading: selectors.getIsLoading(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieCardRequest: () => dispatch(actions.getMovieCardRequest()),
        getMovieCardSuccess: (movie) => dispatch(actions.getMovieCardSuccess(movie))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardPage);