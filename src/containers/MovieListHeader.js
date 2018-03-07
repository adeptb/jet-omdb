import React from 'react';
import TextBox from '../components/TextBox';
import Button from '../components/Button';

export default class MovieListHeader extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            search: undefined
        }
    }

    onSearchClickHandler = () => {
        const {search} = this.state;
        const {onSearch} = this.props;
        onSearch(search);
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