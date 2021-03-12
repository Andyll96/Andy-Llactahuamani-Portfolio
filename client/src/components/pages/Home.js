import React from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from "react-router-dom";
import FeaturedPhotoGallery from '../layout/FeaturedPhotoGallery';
import FeaturedCode from '../layout/FeaturedCode';


const Home = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      {/* Header Section */}
      <header>
        <h1>Andy Llactahuamani</h1>
        <h3>Photographer • Developer • Filmmaker</h3>
        <div className='container-socials'>
          <div className="socials">
            <a href="https://www.github.com/andyll96" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/andy-llactahuamani-6386b5164/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/andysll" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x" />
            </a>
          </div>
          <div className='i-container'>
            <i className="fas fa-grip-lines fa-2x"></i>
          </div>
        </div>
      </header>

      {/* Quote Section */}
      <section className='section-quote'>
        <div>
          <blockquote>
            "The audience knows the truth. The world is simple. It's miserable.
            Solid all the way through. But if you could fool them, even for a
            second... Then you can make them wonder, and then you... Then you got to see something very special"
          </blockquote>
          <h3>~ The Prestige</h3>
        </div>
        <div>
          <iframe title='Trailer' width="480" height="270" src="https://www.youtube.com/embed/X_jcE4awpY8">
          </iframe>
        </div>

      </section>

      {/* Photo Section */}
      <section className='section-photo'>
        {/* <h2>Photos</h2> */}
        <div id='featured-photo-gallery-container'>
          <div className='featured-photo-gallery'>
            <FeaturedPhotoGallery />
          </div>
          <div className='featured-photo-gallery-nav'>
            <i className="fas fa-minus fa-2x pg-1"></i>
            <i className="fas fa-minus fa-2x pg-2"></i>
            <i className="fas fa-minus fa-2x pg-3"></i>
          </div>
        </div>

        <Link to="/photos"><span className='button'>View Photos</span></Link>
      </section>

      {/* Film Section */}
      <section className='section-film'>
        <iframe title='currentFilm' width="760" height="450" src="https://www.youtube.com/embed/X_jcE4awpY8">
        </iframe>

        <div>
          {/* This will link to the project page of the currently showing project */}
          <Link to='/films/'><span className='button'>View Project</span></Link>
          <Link to="/film"><span className='button'>View Films</span></Link>
        </div>
      </section>

      {/* Code Section */}
      <section className='section-code'>
        <FeaturedCode />
      </section>
    </motion.div>
  );
};

export default Home;
