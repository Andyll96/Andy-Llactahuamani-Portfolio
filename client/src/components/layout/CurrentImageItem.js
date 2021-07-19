import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { connect } from "react-redux";
import { setCurrentImage, clearCurrentImage, setCurrentAlbum } from "../../actions/photosActions";

const CurrentImageItem = ({ photos: { images, currentImage, currentAlbum }, setCurrentImage, clearCurrentImage }) => {


    let carouselImages = [];
    let nextImage = null;
    let prevImage = null;


    useEffect(() => {
        // TODO: must fix locked scrolling
        // document.body.style.overflow = 'hidden';
    }, []);

    const exitCurrentImage = () => {
        // TODO: must fix locked scrolling
        // document.body.style.overflow = 'unset';
        clearCurrentImage();
    }

    const setCarouselImages = () => {
        // gets the index of the current image in the currentAlbum
        let currentImageIndex = currentAlbum.images.indexOf(currentImage._id);
        let tempIds = [];
        let tempNextId;
        let tempPrevId;

        // this loop gets the three previous an next images from the current image
        for (let i = 0; i < currentAlbum.images.length; i++) {
            const element = currentAlbum.images[i];
            if (i >= currentImageIndex - 3 && i <= currentImageIndex + 3 && i != currentImageIndex) {
                tempIds.push(element);
                if (i == currentImageIndex - 1)
                    tempPrevId = element;
                else if (i == currentImageIndex + 1)
                    tempNextId = element
            }
        }

        for (let i = 0; i < images.length; i++) {
            const image = images[i];
            for (let j = 0; j < tempIds.length; j++) {
                const imageId = tempIds[j];
                if (image._id == imageId) {
                    carouselImages.push(image);
                    if (image._id == tempPrevId)
                        prevImage = image;
                    else if (image._id == tempNextId)
                        nextImage = image;
                }
            }
        }

        console.log(prevImage);
        console.log(nextImage);
    }

    const setCurrent = image => {
        setCurrentImage(image);
    }

    const prevClick = () => {
        if (prevImage == null) {
            document.body.style.overflow = 'unset';
            window.scrollTo(0, 0);
            setCurrentImage(prevImage);
        } else {
            setCurrentImage(prevImage);
        }
    }

    const nextClick = () => {
        if (nextImage == null) {
            document.body.style.overflow = 'unset';
            window.scrollTo(0, 0);
            setCurrentImage(nextImage);
        } else {
            setCurrentImage(nextImage);
        }
    }

    const keyHandler = key => {
        if (key === 'f') {
            document.querySelector('.current-image').requestFullscreen().catch((e) => {
                console.log(e);
            });
        } else if (key === 'esc') {
            exitCurrentImage();
        } else if (key === 'left') {
            prevClick();
        } else if (key === 'right') {
            nextClick();
        }
    }

    return (
        <AnimatePresence>
            {currentImage &&
                <motion.div className="current-image-page"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: "fixed",
                        top: "0px",
                        background: "white"
                    }}
                >
                    <KeyboardEventHandler handleKeys={['f', 'esc', 'left', 'right']} onKeyEvent={(key, e) => keyHandler(key)} />
                    <a className="exit-button" onClick={() => exitCurrentImage()}>
                        <i className="fas fa-times fa-3x"></i>
                    </a>
                    <AnimatePresence>
                        {
                            <motion.div className="current">
                                <motion.img className="current-image" src={currentImage.fileLocation}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    exit={{ opacity: 0 }}
                                ></motion.img>
                            </motion.div>
                        }
                    </AnimatePresence>

                    <div className="current-image-info">
                        <div >
                            <h2 className="current-image-camera">{currentImage.camera}</h2>
                        </div>
                        <div>
                            <h2 className="current-image-camera">{currentImage.focalLength}mm</h2>
                        </div>
                        <div>
                            <h2 className="current-image-camera">f/{currentImage.fStop}</h2>
                        </div>
                        <div>
                            <h2 className="current-image-camera">{currentImage.shutterSpeed}</h2>
                        </div>
                        <div>
                            <h2 className="current-image-camera">ISO {currentImage.iso}</h2>
                        </div>
                    </div>
                    <div className="carousel">
                        <AnimatePresence>
                            <i className="fas fa-chevron-left fa-5x current-prev" onClick={() => prevClick()}></i>
                            {setCarouselImages()}
                            {console.log(carouselImages)}
                            {carouselImages.map(image => (
                                <motion.button key={image._id} className="carousel-link" onClick={() => setCurrent(image)}
                                // initial={{ opacity: 0 }}
                                // animate={{ opacity: 1 }}
                                // transition={{ delay: 0.3 }}
                                >
                                    <motion.img className="carousel-img" src={image.thumbLocation}
                                    // initial={nextTrigger? "x:50" : "x:-50"}
                                    // transition={{duration: 0.8}}
                                    // animate={{x:0}}
                                    ></motion.img>
                                </motion.button>
                            ))}
                            <i className="fas fa-chevron-right fa-5x current-next" onClick={() => nextClick()}></i>
                        </AnimatePresence>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}

const mapStateToProps = state => ({
    photos: state.photos
});

export default connect(mapStateToProps, { setCurrentImage, clearCurrentImage })(CurrentImageItem)
