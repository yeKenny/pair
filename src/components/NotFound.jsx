import React from 'react'
import {Link} from 'react-router-dom'

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
        <Link className="button is-warning is-medium" to="/">
          Take Me Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
