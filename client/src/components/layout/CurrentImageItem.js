import React, { useEffect } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { connect } from "react-redux";
import { setCurrentImage, clearCurrentImage, setCurrentAlbum } from "../../actions/photosActions";

const CurrentImageItem = ({ photos: { images, filteredImages, currentImage, currentAlbum }, setCurrentImage, clearCurrentImage }) => {

    let carouselImages = [];

    useEffect(() => {
        // TODO: THIS MAY HAVE TO CHANGE DEPENDING ON HOW THE PAGE LOADS ON DIFFERENT DEVICES
        window.scrollTo(0, 113);
    }, []);

    const exitCurrentImage = () => {
        clearCurrentImage();
    }

    const setCarouselImages = () => {
        let currentImageIndex = currentAlbum.images.indexOf(currentImage._id);
        let tempIds = [];

        for (let i = 0; i < currentAlbum.images.length; i++) {
            const element = currentAlbum.images[i];
            if (i >= currentImageIndex - 3 && i <= currentImageIndex + 3 && i != currentImageIndex) {
                tempIds.push(element);
            }
        }

        for (let i = 0; i < images.length; i++) {
            const image = images[i];
            for (let j = 0; j < tempIds.length; j++) {
                const imageId = tempIds[j];
                if (image._id == imageId) {
                    carouselImages.push(image);
                }
            }
        }
    }

    const setCurrent = image => {
        setCurrentImage(image);
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
                <i className="fas fa-times fa-3x"></i>
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
                {setCarouselImages()}
                {console.log(carouselImages)}
                {carouselImages.map(image => (
                    <button className="carousel-link" onClick={() => setCurrent(image)}>
                        <img className="carousel-img" src={image.thumbLocation}></img>
                    </button>
                ))}
            </div>
        </motion.div>
    )
}

const mapStateToProps = state => ({
    photos: state.photos
});

export default connect(mapStateToProps, { setCurrentImage, clearCurrentImage })(CurrentImageItem)
