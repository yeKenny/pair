import React from 'react'
import {connect} from 'react-redux'

const Home = props => {
  return (
    <section className="section has-background-primary">
      <div className="container has-text-centered">
        <h1 className="title">Welcome Back {props.user.username}!</h1>
      </div>
    </section>
  )
}

const mapState = state => ({
  user: state.users.current
})

export default connect(mapState)(Home)
