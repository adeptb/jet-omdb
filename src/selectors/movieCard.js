const getMovieCard = (state) => state.movieCard;

export const getMovie = (state) => getMovieCard(state).get('movie');
export const getIsLoading = (state) => getMovieCard(state).get('isLoading');