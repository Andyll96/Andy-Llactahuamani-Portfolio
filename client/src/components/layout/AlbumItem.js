import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {setCurrentAlbum, setImages} from '../../actions/photosActions'

// AlbumItem will contain all of the images in an array of ImageItem components
const AlbumItem = ({album, photos: {currentALbum}, setCurrentAlbum, setImages}) => {
    const buttonClick = () => {
        console.log(album.title + ' Clicked');
        setCurrentAlbum(album);
        setImages(album);
    }

    // console.log(album);

    return (
        <button className='fade-in' onClick={() => buttonClick()}>
            {album.title}
        </button>
    )
}

AlbumItem.propTypes = {
    album: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    photos: state.photos
});

export default connect(mapStateToProps, {setCurrentAlbum, setImages}) (AlbumItem)