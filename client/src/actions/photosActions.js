import { GET_ALBUMS, ALBUMS_ERROR, SET_CURRENT_ALBUM, CLEAR_CURRENT_ALBUM, SET_FILTERED_IMAGES, GET_IMAGES, IMAGES_ERROR, SET_LOADING_ALBUMS, SET_LOADING_IMAGES, SET_CURRENT_IMAGE, CLEAR_CURRENT_IMAGE } from './types';
import axios from 'axios';

export const getAlbums = () => async dispatch => {
    try {
        setLoadingAlbums();
        const res = await axios.get('/albums');
        console.log('Albums Retrieved in Actions');
        // console.log(res.data);
    
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

export const getImages = () => async dispatch => {
    try {
        setLoadingImages();
        const res = await axios.get('/images');
        console.log('Images Retrieved in Actions');
        // console.log('GET IMAGES', res.data);

        dispatch({
            type: GET_IMAGES,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: IMAGES_ERROR,
            payload: error.response.data
        })
    }
};

export const setCurrentAlbum = album => dispatch => {
    dispatch ({
        type: SET_CURRENT_ALBUM,
        payload: album
    })
};

export const setFilteredImages = filteredImages => async dispatch => {
    dispatch({
        type: SET_FILTERED_IMAGES,
        payload: filteredImages
    })
}

export const clearCurrentAlbum = () => dispatch => {
    dispatch ({
        type: CLEAR_CURRENT_ALBUM
    })
};

export const setLoadingImages = () => {
    return {
        type: SET_LOADING_IMAGES
    };
};

export const setLoadingAlbums = () => {
    return {
        type: SET_LOADING_ALBUMS
    };
};

export const setCurrentImage = image => dispatch => {
    dispatch({
        type: SET_CURRENT_IMAGE,
        payload: image
    })
}

export const clearCurrentImage = () => dispatch => {
    dispatch({
        type: CLEAR_CURRENT_IMAGE
    })
}