import React from 'react'

import notFoundImage from '../resources/not-found.jpg'

const NotFound = () => {
  return (
    <section className="section has-background-primary">
      <div className="content has-text-centered">
        <h1 className="title is-3-desktop has-text-grey-darker">
          We could not find what you are looking for!
        </h1>
        <figure className="image">
          <img src={notFoundImage} alt="Not Found"/>
        </figure>
        <a className="button is-warning is-medium" href="https://www.google.com/">
          Take Me Home
        </a>
      </div>
    </section>
  )
}

export default NotFound
