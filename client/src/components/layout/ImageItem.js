import React from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentImage, clearCurrentImage } from '../../actions/photosActions';

const ImageItem = ({ photos: { currentImage }, image, setCurrentImage, clearCurrentImage }, ref) => {


    // initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}

    const item = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1.5
            }
        }
    };

    const setCurrent = () => {
        console.log(image.fileName + ' Clicked');
        setCurrentImage(image);
    }

    const clearCurrent = () => {
        console.log('currentImage is Cleared');
        clearCurrentImage();
    }
    return (

        <motion.div ref={ref} className="grid-item my-1" variants={item}>
            <button href="" className='grid-link' onClick={() => setCurrent()}>
                <img className='grid-img' src={image.thumbLocation} alt="" />
            </button>
        </motion.div>

    )
}

// ImageItem.propTypes = {
//     image: PropTypes.object.isRequired,
// }

const forwardedImageElement = React.forwardRef(ImageItem)

const mapStateToProps = state => ({
    photos: state.photos
});

export default connect(mapStateToProps, { setCurrentImage, clearCurrentImage })(forwardedImageElement);
