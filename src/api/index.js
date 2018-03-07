import axios from 'axios';
import {baseUrl, apiKey} from '../constants';

export const searchMovies = ({search, page}) => {
    return axios.get(`${baseUrl}?apiKey=${apiKey}&s=${search}&page=${page}`);
}

export const findMovie = (id) => {
    return axios.get(`${baseUrl}?apiKey=${apiKey}&i=${id}`);
}