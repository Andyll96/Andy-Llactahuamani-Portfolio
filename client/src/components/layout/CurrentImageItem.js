import React, { useEffect } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { connect } from "react-redux";
import { setCurrentImage, clearCurrentImage } from "../../actions/photosActions";

const CurrentImageItem = ({photos: {images, filteredImages, currentImage}, clearCurrentImage}) => {
    let fullScreen = false;

    useEffect(() => {
        // TODO: THIS MAY HAVE TO CHANGE DEPENDING ON HOW THE PAGE LOADS ON DIFFERENT DEVICES
        window.scrollTo(0, 113);
    }, []);

    const exitCurrentImage = () => {
        clearCurrentImage();
    }


    return (

        <div className="full-page below-nav">
            <button onClick={() => exitCurrentImage()}>EXIT</button>
            <div>
                <img className="current-image" src={currentImage.fileLocation} ></img>
            </div>
            <div>

            </div>
        </div>


    )
}

const mapStateToProps = state => ({
    photos: state.photos
});

export default connect(mapStateToProps, {setCurrentImage, clearCurrentImage})(CurrentImageItem)
