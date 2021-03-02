import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types'

const ImageItem = ({ image }, ref) => {

    return (
            <motion.div ref={ref} className="grid-item my-1" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} >
                <a href="" className='grid-link'>
                    <img className='grid-img' src={image.thumbLocation} alt="" />
                </a>
            </motion.div>
    )
}

// ImageItem.propTypes = {
//     image: PropTypes.object.isRequired,
// }

const forwardedImageElement = React.forwardRef(ImageItem)

export default forwardedImageElement;
