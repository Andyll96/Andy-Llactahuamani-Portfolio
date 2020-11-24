import { GET_ALBUMS, ALBUMS_ERROR, SET_LOADING, SET_CURRENT_ALBUM, SET_IMAGES, IMAGES_ERROR } from './types';
import axios from 'axios';

export const getAlbums = () => async dispatch => {
    try {
        setLoading();
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

export const setCurrentAlbum = album => dispatch => {
    dispatch ({
        type: SET_CURRENT_ALBUM,
        payload: album
    })
}

// images folder in public folder must be called 'img' and not 'images', there's is a naming conflict when using axios. It'll try to pull the images from the public folder instead of mongodb
export const setImages = album => async dispatch => {
    try {
        // TODO: FINDOUT WHY AXIOS IS GRABBING FROM THE SRC FOLDER, INSTEAD ON MONGODB. CHECK URI?
        // TODO: ADD A HEADER
        const res = await axios.get('/images');
        console.log('All Images Retrieved');
        console.log(res.data);

        dispatch({
            type: SET_IMAGES,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: IMAGES_ERROR,
            payload: error.response.data
        })
    }
    
    
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};