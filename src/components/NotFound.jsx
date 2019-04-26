import React from 'react'
import notFoundImage from '../resources/not-found.jpg'

const NotFound = () => {
  return (
    <section className="section has-background-primary">
      <div className="content has-text-centered">
        <h1 className="title is-3-desktop has-text-black-ter">
          We could not find what you are looking for!
        </h1>
        <figure className="image is-size-1-fullhd is-marginless">
          <img src={notFoundImage} alt="Not Found"/>
        </figure>
      </div>
    </section>
  )
}

export default NotFound
