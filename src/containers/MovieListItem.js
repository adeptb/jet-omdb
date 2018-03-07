import React from 'react';
import {Link} from 'react-router-dom';

export default class MovieListItem extends React.PureComponent{
    render(){
        const {movie} = this.props;
        return <div style={{display: 'flex', 'flex-direction': 'row', margin: 20}}>
            <img style={{'max-width': '200px'}} src={movie.get('Poster')}/>
            <h3>{movie.get('Title')}</h3>
            <Link to={`/movie/${movie.get('imdbID')}`}>{movie.get('Title')}</Link>
        </div>
    }
}