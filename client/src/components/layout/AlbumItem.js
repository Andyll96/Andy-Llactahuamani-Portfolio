import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {setCurrentAlbum, setFilteredImages} from '../../actions/photosActions'

const AlbumItem = ({ photos: { images }, album, setCurrentAlbum, setFilteredImages}) => {
    const buttonClick = () => {
        console.log(album.title + ' Clicked');
        setCurrentAlbum(album);

        let filtered = images.filter(image => image.albumName === album.title);
        setFilteredImages(filtered);
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

export default connect(mapStateToProps, {setCurrentAlbum, setFilteredImages}) (AlbumItem)