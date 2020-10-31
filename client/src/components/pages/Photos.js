import React from 'react'

const Photos = () => {
    return (
        <div>
            <div className="container photo-header px-5">
                <div className='container'>
                <h1>Photography</h1>
                    <p className='album-description px-3'>I often find it difficult to maintain a certain level of creativity in my life. I find that the more time I spend away from being expressive, whether it be neglect in favor of certain responsibilities or lack of motivation, the harder it becomes to get in the mindset to be original and imaginative. It's the inertia of life that wants us to stay comfortable and static. But photography is inspiring to me, it's technicality and composition. It's not comfortable, it's exciting and fun. It's not static, it's challenging.
                    <br/>
                    <br/>
                    This is a collection of my work. I hope you enjoy it as much as I did creating it.  
                </p>
                </div>
                <div className="album-titles">
                    {/* <h2 className='current'>City</h2>
                    <h2>Night</h2>
                    <h2>Neon</h2>
                    <h2>Water</h2> */}
                </div>
            </div>
            <div className="photo-gallery">

            </div>
        </div>
    )
}

export default Photos
