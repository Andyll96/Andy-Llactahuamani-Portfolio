import React, { useEffect } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { connect } from "react-redux";
import { setCurrentImage, clearCurrentImage } from "../../actions/photosActions";

const CurrentImageItem = ({ photos: { images, filteredImages, currentImage }, clearCurrentImage }) => {


    useEffect(() => {
        // TODO: THIS MAY HAVE TO CHANGE DEPENDING ON HOW THE PAGE LOADS ON DIFFERENT DEVICES
        window.scrollTo(0, 113);
    }, []);

    const exitCurrentImage = () => {
        clearCurrentImage();
    }

    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 27)
            exitCurrentImage();
        if (event.keyCode == 70)
            document.querySelector('.current-image').requestFullscreen().catch((e) => {
                console.log(e);
            });
    })

    return (
        <motion.div className="current-image-page below-nav">
            <a className="exit-button" onClick={() => exitCurrentImage()}>
                <i class="fas fa-times fa-3x"></i>
            </a>
            <div>
                <img className="current-image" src={currentImage.fileLocation} ></img>
            </div>

            <div className="current-image-info">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h2 className="current-image-camera">{currentImage.camera}</h2>
                </motion.div>
                <motion.div>
                    <h2 className="current-image-camera">{currentImage.focalLength}mm</h2>
                </motion.div>
                <motion.div>
                    <h2 className="current-image-camera">f/{currentImage.fStop}</h2>
                </motion.div>
                <motion.div>
                    <h2 className="current-image-camera">{currentImage.shutterSpeed}</h2>
                </motion.div>
                <motion.div>
                    <h2 className="current-image-camera">ISO {currentImage.iso}</h2>
                </motion.div>
            </div>
            <div className="carousel">
                {/* carousel */}
            </div>
        </motion.div>
    )
}

const mapStateToProps = state => ({
    photos: state.photos
});

export default connect(mapStateToProps, { setCurrentImage, clearCurrentImage })(CurrentImageItem)
