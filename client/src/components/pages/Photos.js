import React, { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import Masonry from 'react-masonry-css';
import { connect } from 'react-redux';
import AlbumItem from '../layout/AlbumItem';
import ImageItem from '../layout/ImageItem';
import PropTypes from 'prop-types';
import { getAlbums } from '../../actions/photosActions';


const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

const Photos = ({ photos: { albums, images, loading, currentAlbum }, getAlbums }) => {

    useEffect(() => {
        getAlbums();
        // eslint-disable-next-line

    }, []);

    let loadingCenter;
    if (loading || albums === null) {
         loadingCenter = {
                justifySelf: 'center',
                height: 'fit-content'
            }
    } else {
        loadingCenter = {}
    }
    

    const defaultDescription = 'I often find it difficult to maintain a certain level of creativity in my life. I find that the more time I spend away from being expressive, whether it be neglect in favor of certain responsibilities or lack of motivation, the harder it becomes to get in the mindset to be original and imaginative. It\'s the inertia of life that wants us to stay comfortable and static. But photography is inspiring to me, it\'s technicality and composition. It\'s not comfortable, it\'s exciting and fun. It\'s not static, it\'s challenging. This is a collection of my work. I hope you enjoy it as much as I did creating it.'

    return (
        <div className='below-nav'>
            <div className="container photo-header px-5">
                <div className='container fade-in' >
                    <h1>{currentAlbum === null ? 'Photography' : currentAlbum.title}</h1>
                    <p className='album-description px-3'>
                        {currentAlbum === null ? defaultDescription : currentAlbum.description}
                    </p>
                </div>
                <div className="album-nav" style={loadingCenter}>
                    {/* Album Names */}
                    {loading || albums === null ? (<Spinner  />) : !loading && albums.length === 0 ? (<p> No Albums to show</p>) : albums.map(album => <AlbumItem album={album} key={album._id} />)}
                </div>
            </div>

            <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                {!loading && images === null ? (<p> No Images to show</p>) : images.map(image => <ImageItem image={image} key={image._id} />)}
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

export default connect(mapStateToProps, { getAlbums })(Photos);
