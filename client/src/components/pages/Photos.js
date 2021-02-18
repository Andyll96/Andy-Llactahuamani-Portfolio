import React, { createRef, useEffect, useRef } from 'react';
import Spinner from '../layout/Spinner';
import Masonry from 'react-masonry-css';
import { connect } from 'react-redux';
import anime from 'animejs/lib/anime.es.js';
import AlbumItem from '../layout/AlbumItem';
import ImageItem from '../layout/ImageItem';
import PropTypes from 'prop-types';
import { getAlbums, getImages } from '../../actions/photosActions';


const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

const Photos = ({ photos: { albums, images, filteredImages, loadingAlbums, loadingImages, currentAlbum }, getAlbums, getImages }) => {

    // const filteredImageElements = useRef([createRef(), createRef(), createRef(), createRef(), createRef(), createRef(), createRef()]);
    let filteredImageElements = useRef([]);
    
    // const filteredImageElements = useRef(Array(filteredImages.length).fill().map((_, i) => createRef()));
    
    // When photos page is initially loaded
    useEffect(() => {
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
                console.log('Width: ',filteredImageElements.current[i].current.firstChild.firstChild.offsetWidth)
                console.log('Height: ',filteredImageElements.current[i].current.firstChild.firstChild.offsetHeight)
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

    const defaultDescription = `I often find it difficult to maintain a certain level of creativity in my life. I find that the more time I spend away from being expressive, whether it be neglect in favor of certain responsibilities or lack of motivation, the harder it becomes to get in the mindset to be original and imaginative. It's the inertia of life that wants us to stay comfortable and static. But photography is inspiring to me, it's technicality and composition. It's not comfortable, it's exciting and fun. It's not static, it's challenging.`;

    return (
        <div className='below-nav'>
            {/* ALBUM NAME AND DESCRIPTION */}
            <div className="container photo-header px-5">
                {/* ALBUM DESCRIPTION */}
                <div className='container fade-in' >
                    {/* TODO: SET THE ALL ALBUM AS THE DEFAULT SO IT CAN DISPLAY THE TITLE AND DESCRIPTION PROPERLY */}
                    <h1 className='photo-header-title'>{currentAlbum === null ? 'Photography' : currentAlbum.title}</h1>
                    <p className='album-description px-3'>
                        {currentAlbum === null ? defaultDescription : currentAlbum.description}
                    </p>
                    <br />
                    <p className='px-3'> This is a collection of my work. I hope you enjoy it as much as I did creating it.</p>
                </div>
                {/* ALBUM NAVBAR */}
                <div className="album-nav" style={loadingCenter}>
                    {/* Album Names */}
                    {loadingAlbums || albums === null || images == null ? (<Spinner />) : !loadingAlbums && albums.length === 0 ? (<p> No Albums to show</p>) : albums.map(album => <AlbumItem album={album} key={album._id} />)}
                </div>
            </div>

            {/* columnClassName given to each column created */}
            <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid mx-5" columnClassName="my-masonry-grid_column">
                {/* If images are loading and images object is null, show spinner */}
                {/* else if not loading AND filtered images is null, show all images */}
                {/* else show the filtered images */}
                {loadingImages || images === null ? <Spinner /> : !loadingImages && filteredImages === null ? images.map(image => <ImageItem className='my-1' image={image} key={image._id} />) : filteredImages.map((image, i) => <ImageItem ref={filteredImageElements.current[i]} image={image} key={image._id} />)}
            </Masonry>
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