import React from 'react'
import PropTypes from 'prop-types'

const AlbumItem = ({album}) => {


    return (
        <button className='fade-in'>
            {album.title}
        </button>
    )
}

AlbumItem.propTypes = {
    album: PropTypes.object.isRequired,
}

export default AlbumItem
