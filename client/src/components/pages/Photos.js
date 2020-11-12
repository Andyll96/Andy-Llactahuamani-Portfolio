import React from 'react';
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

const Photos = () => {
    return (
        <div className='below-nav'>
            <div className="container photo-header px-5">
                <div className='container'>
                    <h1>Photography</h1>
                    <p className='album-description px-3'>I often find it difficult to maintain a certain level of creativity in my life. I find that the more time I spend away from being expressive, whether it be neglect in favor of certain responsibilities or lack of motivation, the harder it becomes to get in the mindset to be original and imaginative. It's the inertia of life that wants us to stay comfortable and static. But photography is inspiring to me, it's technicality and composition. It's not comfortable, it's exciting and fun. It's not static, it's challenging.
                    <br />
                        <br />
                    This is a collection of my work. I hope you enjoy it as much as I did creating it.
                </p>
                </div>

                <div className="album-nav">
                    <a href="" className='button'>
                        <h2>City</h2>
                    </a>
                    <a href="" className='button'>
                        <h2>Neon</h2>
                    </a>
                    <a href="" className='button'>
                        <h2>Night</h2>
                    </a>
                    <a href="" className='button'>
                        <h2>Water</h2>
                    </a>
                    <a href="" className='button'>
                        <h2>High Park</h2>
                    </a>
                    <a href="" className='button'>
                        <h2>Harbour</h2>
                    </a>
                    <a href="" className='button'>
                        <h2>Rooftop</h2>
                    </a>
                    <a href="" className='button'>
                        <h2>Ryerson</h2>
                    </a>
                    <a href="" className='button'>
                        <h2>Forest</h2>
                    </a>
                    <a href="" className='button'>
                        <h2>Work</h2>
                    </a>
                    <a href="" className='button'>
                        <h2>Downtown</h2>
                    </a>
                    <a href="" className='button'>
                        <h2>Cosplay</h2>
                    </a>

                </div>
            </div>

            {/* TODO: INVESTIGATE MASONRY RESIZING */}
            <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
                {/* <div className='grid-item' data-size='3192x3990'>
                    a tag is for thumbnail
                    <a href="/images/photos/DSC_0076.png" className='img-wrap'>
                        <img src={'/images/photos/DSC_0076.png'} />
                        <div className="description description-grid">
                            <h3>Test Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, culpa. Aliquid in similique animi ipsam incidunt? Accusantium harum tempora quam accusamus, aspernatur ex voluptatum perferendis deserunt cum iure ipsam quis.</p>
                            <div className="details">
                                <ul>
                                    <li><i className="icon icon-camera"></i><span>Nikon D5300</span></li>
                                    <li><i className="icon icon-focal_length"></i><span>22.5mm</span></li>
                                    <li><i className="icon icon-aperture"></i><span>&fnof;/5.6</span></li>
                                    <li><i className="icon icon-exposure_time"></i><span>1/1000</span></li>
                                    <li><i className="icon icon-iso"></i><span>80</span></li>
                                </ul>
                            </div>
                        </div>
                    </a>
                </div> */}
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-1.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-2.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-3.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-4.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-5.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-6.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-7.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-8.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-9.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-10.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-11.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-12.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-13.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-14.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-15.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-16.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-17.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-18.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-19.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-20.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-21.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-22.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-23.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-24.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-25.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-26.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-27.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-28.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-29.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-30.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-31.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-32.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-33.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-34.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-35.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-36.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-37.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-38.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-39.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-40.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-41.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-42.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-43.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-44.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-45.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-46.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-47.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-48.jpg" alt="" srcset="" />
                </div>
                <div className="grid-item">
                    <img src="/images/photos/thumbs/testShootThumb-49.jpg" alt="" srcset="" />
                </div>
            </Masonry>
        </div>
    )
}

export default Photos
