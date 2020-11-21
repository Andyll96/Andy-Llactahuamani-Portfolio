import React from 'react'
import PropTypes from 'prop-types'

const ImageItem = ({image}) => {
    return (
        <div className="grid-item">
            {/* Must fetch the image data entry in the images database. Don't fetch the info in the image item component, otherwise it's going to do alot of requests to mongodb. Do it all in the photos component and just pass the image object as a prop */}
            <img src={} alt=""/>           
        </div>
    )
}

ImageItem.propTypes = {
    image: PropTypes.object.isRequired,
}

export default ImageItem
