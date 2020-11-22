import { GET_ALBUMS, ALBUMS_ERROR, SET_LOADING, SET_CURRENT_ALBUM } from '../actions/types';


const initialState = {
    albums: null,
    images: null,
    currentAlbum: null,
    currentImage: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALBUMS:
            return {
                ...state,
                albums: action.payload,
                loading: false
            }
        case ALBUMS_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            }
        case SET_CURRENT_ALBUM:
            console.log(action.payload, 'is now current');
            return {
                ...state,
                currentAlbum: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}