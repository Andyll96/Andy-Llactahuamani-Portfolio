import React from 'react'
import { Link } from "react-router-dom";


const FeaturedCode = () => {
    return (
        <div className='featured-code'>
            <div className="git-container">
                <div className='git-info'>
                    <h2 className='git-name'>Patient Monitoring System</h2>
                    <h3 className='git-last-updated'>Last Updated: Monday, October 12th 2020</h3>
                    <p className='git-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi sunt alias maiores quibusdam nihil beatae aperiam assumenda, fugiat sapiente voluptatem expedita! In est molestiae ullam laudantium voluptatem quo et dicta.
                Vero modi deserunt maxime illo architecto consectetur quam iure nesciunt cumque, fugit dolor ex natus ea, sint assumenda iste autem laborum enim sequi reprehenderit. Iure commodi deserunt fuga minus quaerat.</p>
                </div>
                <div className='git-graph'>
                    
                </div>
            </div>
            <div className="links">
                <div>
                    <Link to='/code/d'><span className='button'>View Project</span></Link>
                <Link to="/code"><span className='button'>View More</span></Link>
                </div>
                
            </div>

        </div>
    )
}

export default FeaturedCode
