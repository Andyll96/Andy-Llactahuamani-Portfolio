import React, { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import Masonry from 'react-masonry-css';
import { connect } from 'react-redux';
import AlbumItem from '../layout/AlbumItem';
import PropTypes from 'prop-types'
import { getAlbums } from '../../actions/photosActions';


const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

const Photos = ({photos: {albums, loading}, getAlbums}) => {

    // const [albums, setAlbums] = useState([]);
    // const [loading, setLoading] = useState(false);

    // const [currentAlbum, setCurrentAlbum] = useState();
    // const [currentImage, setCurrentImage] = useState();

    // let imageArray = [];

    useEffect(() => {
        getAlbums();
        // eslint-disable-next-line
    }, []);

    // const getAlbums = async () => {
    //     setLoading(true);
    //     try {
    //         const res = await axios.get('/albums');
    //         console.log('Albums Retrieved');
    //         // console.log(typeof res.data);
    //         setAlbums(res.data);
    //         // console.log(typeof albums);
    //         setLoading(false);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    let loadingCenter;
    if (loading) {
        loadingCenter = {
            justifySelf: 'center',
            height: 'fit-content'
        }
    }

    return (
        <div className='below-nav'>
            <div className="container photo-header px-5">
                <div className='container fade-in'>
                    <h1>Photography</h1>
                    <p className='album-description px-3'>I often find it difficult to maintain a certain level of creativity in my life. I find that the more time I spend away from being expressive, whether it be neglect in favor of certain responsibilities or lack of motivation, the harder it becomes to get in the mindset to be original and imaginative. It's the inertia of life that wants us to stay comfortable and static. But photography is inspiring to me, it's technicality and composition. It's not comfortable, it's exciting and fun. It's not static, it's challenging.
                    <br />
                    <br />
                    This is a collection of my work. I hope you enjoy it as much as I did creating it.
                </p>
                </div>
                <div className="album-nav" style={loadingCenter}>
                    {/* Album Names */}
                    {/* TODO: WHY IS IT WHEN THE BUTTONS LOAD, THEY'RE CLICKED??? */}
                    {loading || albums === null ? (<Spinner style={{ height: "fit-content" }} />) : !loading && albums.length === 0 ? (<p> No Albums to show</p>) : albums.map(album => <AlbumItem album={ album } key={album._id}/>)}
                </div>
            </div>

            {/* TODO: INVESTIGATE MASONRY RESIZING */}
            <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-1.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-2.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-3.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-4.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-5.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-6.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-7.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-8.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-9.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-10.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-11.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-12.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-13.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-14.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-15.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-16.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-17.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-18.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-19.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-20.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-21.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-22.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-23.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-24.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-25.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-26.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-27.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-28.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-29.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-30.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-31.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-32.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-33.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-34.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-35.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-36.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-37.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-38.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-39.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-40.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-41.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-42.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-43.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-44.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-45.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-46.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-47.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-48.jpg" alt="" srcSet="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-49.jpg" alt="" srcSet="" />
                </div>
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

export default connect(mapStateToProps, {getAlbums})(Photos);
