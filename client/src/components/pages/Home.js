import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section>
                <h1>Andy Llactahuamani</h1>
                <h2>Photographer • Developer • Filmmaker</h2>

                <div>
                    <a href='https://www.github.com/andyll96' target='_blank'>
                        <i class="fab fa-github"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/andy-llactahuamani-6386b5164/' target='_blank'>
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href='https://www.instagram.com/andysll' target='_blank'>
                        <i class='fab fa-instagram' />
                    </a>
                </div>
            </section>
            <section>
                <quote>"The audience knows the truth. The world is simple. It's miserable. Solid all the way through. But if you could fool them, even for a second... Then you got to see something very special"</quote>
                <h3>~The Prestige</h3>
                
            </section>
            <section>
                <h1>Photos</h1>
                <Link to='/photos'>View Photos</Link>
            </section>
            <section>
                <h1>Film</h1>
                <Link to='/film'>View Films</Link>
                {/* This will link to the project page of the currently showing project */}
                {/* <Link to='/films/'>View Project</Link> */}
            </section>
            <section>
                <h1>Code</h1>
                {/* <Link to='/code/d'>View Project</Link> */}
                <Link to='/code'>View More</Link>
            </section>
            <footer>
                <h1>Something Inspirational</h1>
                <div>
                    <a href='https://www.github.com/andyll96' target='_blank'>
                        <i class="fab fa-github"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/andy-llactahuamani-6386b5164/' target='_blank'>
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href='https://www.instagram.com/andysll' target='_blank'>
                        <i class='fab fa-instagram' />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Home
