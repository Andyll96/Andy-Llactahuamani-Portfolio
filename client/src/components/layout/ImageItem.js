import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types'

const ImageItem = ({ image }, ref) => {

    return (
        <AnimatePresence>
            <motion.div ref={ref} className="grid-item my-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5 }}
                exit={{ opacity: 0 }}
            >
                <a href="" className='grid-link'>
                    <img className='grid-img' src={image.thumbLocation} alt="" />
                </a>
            </motion.div>
        </AnimatePresence>
    )
}

// ImageItem.propTypes = {
//     image: PropTypes.object.isRequired,
// }

const forwardedImageElement = React.forwardRef(ImageItem)

export default forwardedImageElement;
