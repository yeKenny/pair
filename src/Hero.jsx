import React from 'react'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero is-large is-info">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-size-1-desktop is-spaced">
            Don't want to go through another workout alone?
          </h1>
          <h2 className="subtitle is-size-3-desktop">
            Join us to connect with your future workout partner!
          </h2>
          <Link className="button is-primary is-medium" to="/register">
            Let's Go!
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero