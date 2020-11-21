import React from 'react'
import PropTypes from 'prop-types'

const AlbumItem = ({album}) => {
    const buttonClick = () => {
        console.log(album.title + ' Clicked');
    }

    console.log(album);

    return (
        <button className='fade-in' onClick={() => buttonClick()}>
            {album.title}
        </button>
    )
}

AlbumItem.propTypes = {
    album: PropTypes.object.isRequired,
}

export default AlbumItem