import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import { fetchAllUsers } from '../store/reducers/users'

class AllUsers extends React.Component {
  componentDidMount() {
    this.props.fetchAllUsers()
  }

  render() {
    const {users} = this.props

    return (
      <section className="section has-background-primary">
        <div className="container has-text-centered">
          <h1 className="title has-text-white">Users</h1>
          {users.map(user => (
            <Link to={`/users/${user.id}`} key={user.id}>
              <div className="card has-background-white margin-bottom">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src={user.image} alt="User"/>
                      </figure>
                    </div>
                    <div className="media-content has-text-centered">
                      <p className="title is-6">{user.username}</p>
                      <p className="subtitle is-6">{user.firstName} {user.lastName}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <style jsx="">{`
          .margin-bottom {
            margin-bottom: 1rem;
          }
        `}</style>
      </section>
    )
  }
}

const mapState = state => ({
  users: state.users.all
})

const mapDispatch = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(mapState, mapDispatch)(AllUsers)