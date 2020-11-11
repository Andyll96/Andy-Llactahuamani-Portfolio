import React from 'react';
import Masonry from 'react-masonry-css';

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }


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
            <Masonry breakpointCols={3} className="my-masonry-grid photo-gallery" columnClassName="my-masonry-grid_column">
                <div className='grid-item' data-size='3192x3990'>
                    {/* a tag is for thumbnail */}
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
                </div>
                <div>
                    <img src={'/images/photos/DSC_0110.png'} />
                </div>
                <div>
                    <img src={'/images/photos/DSC_0126.png'} />
                </div>
                <div>
                    <img src={'/images/photos/DSC_0135.png'} />
                </div>
                <div>
                    <img src={'/images/photos/DSC_0139.png'} />
                </div>
                <div>
                    <img src={'/images/photos/DSC_0169.png'} />
                </div>
                <div>
                    <img src={'/images/photos/IMG_6502.JPG'} />
                </div>
            </Masonry>
        </div>
    )
}

export default Photos
