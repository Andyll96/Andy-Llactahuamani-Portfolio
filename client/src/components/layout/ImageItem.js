import React from 'react'
import PropTypes from 'prop-types'

const ImageItem = ({image}) => {
    return (
        <div className="grid-item">
            <img src={image.fileLocation} alt=""/>           
        </div>
    )
}

ImageItem.propTypes = {
    image: PropTypes.object.isRequired,
}

export default ImageItem
