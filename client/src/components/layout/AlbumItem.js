import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import { setCurrentAlbum, setFilteredImages } from '../../actions/photosActions'

const AlbumItem = ({ photos: { images, currentAlbum }, album, setCurrentAlbum, setFilteredImages }) => {


    useEffect(() => {
        console.log('AlbumItem useEffect HERE');
        if (album.title === 'All Photos' && currentAlbum === null) {
            setCurrentAlbum(album);
            let filtered;
            filtered = images;
            setFilteredImages(filtered);
        }
    }, []);

    const buttonClick = () => {
        console.log(album.title + ' Clicked');
        window.scrollTo(0, 0);
        setCurrentAlbum(album);
        let filtered;
        if (album.title !== 'All Photos') {
            filtered = images.filter(image => image.albumName === album.title);
        } else {
            filtered = images;
        }
        setFilteredImages(filtered);
    }

    // console.log(album);

    return (
        <button onClick={() => buttonClick()}>
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

export default connect(mapStateToProps, { setCurrentAlbum, setFilteredImages })(AlbumItem)