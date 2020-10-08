import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Header Section */}
      <header>
        <h1>Andy Llactahuamani</h1>
        <h2>Photographer • Developer • Filmmaker</h2>
        <div className='container-socials'>
          <div className="socials">
            <a href="https://www.github.com/andyll96" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/andy-llactahuamani-6386b5164/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin-in fa-lg"></i>
            </a>
            <a href="https://www.instagram.com/andysll" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram fa-lg" />
            </a>
          </div>
          <div className='i-container'>
          <i class="fas fa-grip-lines fa-2x"></i>
          </div>
        </div>
      </header>

      {/* Quote Section */}
      <section>
        <quote>
          "The audience knows the truth. The world is simple. It's miserable.
          Solid all the way through. But if you could fool them, even for a
          second... Then you got to see something very special"
        </quote>
        <h3>~The Prestige</h3>
      </section>

      {/* Photo Section */}
      <section>
        <h1>Photos</h1>
        <Link to="/photos">View Photos</Link>
      </section>

      {/* Film Section */}
      <section>
        <h1>Film</h1>
        <Link to="/film">View Films</Link>
        {/* This will link to the project page of the currently showing project */}
        {/* <Link to='/films/'>View Project</Link> */}
      </section>

      {/* Code Section */}
      <section>
        <h1>Code</h1>
        {/* <Link to='/code/d'>View Project</Link> */}
        <Link to="/code">View More</Link>
      </section>

      {/* Footer */}
      <footer>
        <h1>Something Inspirational</h1>
        <div className="socials">
          <a
            href="https://www.github.com/andyll96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github fa-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/andy-llactahuamani-6386b5164/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin-in fa-lg"></i>
          </a>
          <a
            href="https://www.instagram.com/andysll"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-instagram fa-lg" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
