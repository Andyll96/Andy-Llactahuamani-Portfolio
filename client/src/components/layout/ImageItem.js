import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

const ImageItem = ({image}, ref) => {

    return (
        <div ref={ref} className="grid-item my-1">
            <a href="" className='grid-link'>
                <img className='grid-img' src={image.fileLocation} alt=""/>          
            </a>
        </div>
    )
}

// ImageItem.propTypes = {
//     image: PropTypes.object.isRequired,
// }

const forwardedImageElement = React.forwardRef(ImageItem)

export default forwardedImageElement;
