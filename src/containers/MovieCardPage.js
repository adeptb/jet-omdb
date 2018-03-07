import React from 'react';
import {Map, fromJS} from 'immutable';
import {findMovie} from '../api';

export default class MovieCardPage extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            movie: undefined,
        }
        findMovie(props.match.params.id)
            .then(response => this.setState({movie: fromJS(response.data)}))
    }

    render() {
        const {movie} = this.state;
        if(!movie){
            return null;
        }
        return <div>
            <h1>{movie.get('Title')}</h1>
            <p>{movie.get('Plot')}</p>
            <p>{movie.get('imdbRating')}</p>
            <img src={movie.get('Poster')}/>
        </div>
    }
}