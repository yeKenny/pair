import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer has-background-white-ter">
      <div className="container">
        <Link className="button is-link has-text-white-ter is-pulled-right" to="/feedback">
          Send Feedback
        </Link>
      </div>
    </footer>
  )
}

export default Footer