import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import MovieListPage from './containers/MovieListPage';
import MovieCardPage from './containers/MovieCardPage'

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <BrowserRouter>
      <div>
        <Link to='/'>Поиск фильмов</Link>
        <Route exact path='/' component={MovieListPage}/>
        <Route path='/movie/:id' component={MovieCardPage}/>
      </div>
    </BrowserRouter>
  }
}

export default App;
