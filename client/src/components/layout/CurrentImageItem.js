import React, { useEffect } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { connect } from "react-redux";
import { setCurrentImage, clearCurrentImage } from "../../actions/photosActions";

const CurrentImageItem = ({photos: {images, filteredImages, currentImage}, clearCurrentImage}) => {

    
    useEffect(() => {
        // TODO: THIS MAY HAVE TO CHANGE DEPENDING ON HOW THE PAGE LOADS ON DIFFERENT DEVICES
        window.scrollTo(0, 113);
    }, []);

    const exitCurrentImage = () => {
        clearCurrentImage();
    }

    document.addEventListener('keydown', function(event){
        if(event.keyCode == 27)
            exitCurrentImage();
        if(event.keyCode == 70)
            document.querySelector('.current-image').requestFullscreen().catch((e) => {
                console.log(e);
            });
    })

    return (
        <motion.div className="full-page below-nav">
            <button onClick={() => exitCurrentImage()}>EXIT</button>
            <div>
                <img className="current-image" src={currentImage.fileLocation} ></img>
            </div>
            <div>

            </div>
        </motion.div>
    )
}

const mapStateToProps = state => ({
    photos: state.photos
});

export default connect(mapStateToProps, {setCurrentImage, clearCurrentImage})(CurrentImageItem)
