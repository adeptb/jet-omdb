import React from 'react';
import {connect} from 'react-redux';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import {searchMovies} from '../api';
import * as selectors from '../selectors/movieList';
import * as actions from '../actions/movieList';


class MovieListHeader extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            search: undefined
        }
    }

    onSearchClickHandler = () => {
        const {search} = this.state;
        const {page, getMoviesRequest, getMoviesSuccess} = this.props;
        getMoviesRequest(1, search);
        searchMovies({
            search,
            page: 1
        }).then(response => getMoviesSuccess(response.data.Search));
        
    }

    onSearchChangeHandler = (search) => {
        this.setState({search});
    }

    render(){
        const {search} = this.state;
        return <div>
            <TextBox value={search} onChange={this.onSearchChangeHandler}/>
            <Button onClick={this.onSearchClickHandler}>Найти</Button>
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        page: selectors.getPage(state),
        search: selectors.getSearch(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMoviesRequest: (page, search) => dispatch(actions.getMoviesRequest(page,search)),
        getMoviesSuccess: (movies) => dispatch(actions.getMoviesSuccess(movies))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListHeader)