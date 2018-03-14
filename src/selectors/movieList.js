const getMovieListState = (state) => state.movieList;

export const getSearch = (state) => getMovieListState(state).get('search');
export const getPage = (state) => getMovieListState(state).get('page');
export const getMovies = (state) => getMovieListState(state).get('movies');
