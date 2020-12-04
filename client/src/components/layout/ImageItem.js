import React from 'react'
import PropTypes from 'prop-types'

const ImageItem = ({image}) => {
    return (
        <div className="grid-item my-1">
            <a href="" className='grid-link'>
                <img className='grid-img' src={image.fileLocation} alt=""/>          
            </a>
        </div>
    )
}

ImageItem.propTypes = {
    image: PropTypes.object.isRequired,
}

export default ImageItem
