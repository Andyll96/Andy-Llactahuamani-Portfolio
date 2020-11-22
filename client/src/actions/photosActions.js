import { GET_ALBUMS, ALBUMS_ERROR, SET_LOADING, SET_CURRENT_ALBUM } from './types';
import axios from 'axios';

export const getAlbums = () => async dispatch => {
    try {
        setLoading();
        const res = await axios.get('/albums');
        console.log('Albums Retrieved in Actions');
    
        dispatch({
            type: GET_ALBUMS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: ALBUMS_ERROR,
            payload: error.response.data
        })
    }

};

export const setCurrentAlbum = album => {
    return {
        type: SET_CURRENT_ALBUM,
        payload: album
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};