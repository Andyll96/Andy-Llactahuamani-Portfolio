import React, { createRef, useEffect, useRef } from 'react';
import Spinner from '../layout/Spinner';
import Masonry from 'react-masonry-css';
import { connect } from 'react-redux';
import anime from 'animejs/lib/anime.es.js';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import AlbumItem from '../layout/AlbumItem';
import ImageItem from '../layout/ImageItem';
import CurrentImageItem from '../layout/CurrentImageItem';
import PropTypes from 'prop-types';
import { getAlbums, getImages } from '../../actions/photosActions';


const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

const Photos = ({ photos: { albums, images, filteredImages, loadingAlbums, loadingImages, currentAlbum, currentImage }, getAlbums, getImages }) => {

    // const filteredImageElements = useRef([createRef(), createRef(), createRef(), createRef(), createRef(), createRef(), createRef()]);
    let filteredImageElements = useRef([]); //this one works

    // const filteredImageElements = useRef(Array(filteredImages.length).fill().map((_, i) => createRef()));

    // When photos page is initially loaded
    useEffect(() => {
        window.scrollTo(0, 0)
        getAlbums();
        getImages();
        // eslint-disable-next-line
    }, []);

    // When filteredImages is changed
    useEffect(() => {
        if (filteredImages !== null && filteredImageElements.current.length !== 0) {
            filteredImageElements = Array(filteredImages.length).fill().map((_, i) => createRef());
            filteredImageElements.current.forEach((el, i) => {
                console.log(filteredImageElements.current[i].current.firstChild.firstChild)
                console.log('Width: ', filteredImageElements.current[i].current.firstChild.firstChild.offsetWidth)
                console.log('Height: ', filteredImageElements.current[i].current.firstChild.firstChild.offsetHeight)
            });

        }
    }, [filteredImages]);

    let loadingCenter;
    if (loadingAlbums || albums === null) {
        loadingCenter = {
            justifySelf: 'center',
            height: 'fit-content'
        }
    } else {
        loadingCenter = {}
    }

    const imageListVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 1
            }
        }
    }

    const imageVariant = {
        hidden: { y: 25, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    }

    return (
        <div>
            <CurrentImageItem layoutId='current' />
            <div className='below-nav'>
                {/* ALBUM NAME AND DESCRIPTION */}
                <div className="container photo-header px-5">
                    {/* ALBUM DESCRIPTION */}
                    <div className='container' >
                        {/* TODO: WORK ON EXIT ANIMATION */}
                        <AnimatePresence>
                            {/* <motion.div initial={{ opacity: 0, y: 25 }} transition={{ delay: 0.3, duration: 1 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 25 }}> */}
                            {currentAlbum === null ?
                                <h1></h1> :
                                currentAlbum.title === 'All Photos' ? 
                                <motion.h1 key={currentAlbum._id} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }} >Photography</motion.h1> :
                                <motion.h1 key={currentAlbum._id} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }} >{currentAlbum.title}</motion.h1>
                            }
                            {/* </motion.div> */}
                        </AnimatePresence>
                        <AnimatePresence>
                            {
                                currentAlbum === null ?
                                    <p></p> :
                                    <motion.p key={currentAlbum._id} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.75 }}>{currentAlbum.description}</motion.p>
                            }
                        </AnimatePresence>
                        <br />
                        {/* <p className='px-3'> This is a collection of my work. I hope you enjoy it as much as I did creating it.</p> */}
                    </div>
                    {/* ALBUM NAVBAR */}
                    <motion.div className="album-nav" style={loadingCenter} initial={{ opacity: 0 }} transition={{ delay: 1.4, duration: 1 }} animate={{ opacity: 1 }} >
                        {/* Album Names */}
                        {loadingAlbums || albums === null || images == null ?
                            (<Spinner />) :
                            !loadingAlbums && albums.length === 0 ?
                                (<p> No Albums to show</p>) : (
                                    <motion.div className="album-nav-list" transition={{ staggerChildren: 0.8 }}>
                                        {albums.map((album, i) => (
                                            <motion.div initial={{ y: 25 }} animate={{ y: 0 }}>
                                                <AlbumItem album={album} key={album._id} />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )
                        }
                    </motion.div>
                </div>

                {/* columnClassName given to each column created */}
                <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid mx-5" columnClassName="my-masonry-grid_column">
                    {
                        loadingImages || images === null ?
                            <Spinner /> :
                            !loadingImages && filteredImages === null ?
                                images.map((image, i) => (
                                    <ImageItem className='my-1' image={image} key={image._id} />
                                ))
                                :
                                filteredImages.map((image, i) => (
                                    <ImageItem ref={filteredImageElements.current[i]} image={image} key={image._id} />
                                ))
                    }
                </Masonry>
            </div>
        </div>

    );
};

// TODO: FIX ISSUE WITH PROP TYPES, IT THROWS AN ERROR BECAUSE WHEN IT'S INITIALLY BROUGHT INTO THE PROP, IT SEES THAT ALBUMS IS STILL NULL. BUT IS THEN FILLED WITH THE ALBUMS DATA FROM THE SERVER
// Photos.propTypes = {
//     albums: PropTypes.object.isRequired,
// }

// imports from our state and brings it into the component as a prop
const mapStateToProps = state => ({
    photos: state.photos
});

export default connect(mapStateToProps, { getAlbums, getImages })(Photos);