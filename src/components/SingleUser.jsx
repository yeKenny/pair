import React from 'react';
import {connect} from 'react-redux';

import {fetchUser} from '../store/reducers/users';
import NotFound from './NotFound';


class SingleUser extends React.Component {
  state = {
    requestSent: false
  }

  componentDidMount() {
    const userId = Number(this.props.match.params.id);
    this.props.fetchUser(userId)
  }

  handleClick = event => {
    this.setState({requestSent: true})
  }

  render() {
    const {loggedIn, user} = this.props

    return user ? (
      <section className="section has-background-primary">
        <div className="box">
          <article className="media">
            <figure className="media-left">
              <p className="image is-64x64">
                <img src={user.image} alt="User" />
              </p>
            </figure>
            <div className="media-content">
              <div className="content has-text-centered">
                <p>
                  <strong>{user.username}</strong>
                  <br />
                  {user.firstName} {user.lastName}
                </p>
              </div>
            </div>
            <div className="media-right">
              {
                !loggedIn
                ? <button className="button is-success" disabled>Log In</button>
                : loggedIn && !this.state.requestSent
                ? <button className="button is-success" onClick={this.handleClick}>Add</button>
                : <button className="button is-success" disabled>Added</button>
              }
            </div>
          </article>
        </div>
      </section>
    ) : (
      <NotFound />
    )
  }
}

const mapState = state => ({
  user: state.users.single,
  loggedIn: !!state.users.current.id
})

const mapDispatch = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
})

export default connect(mapState, mapDispatch)(SingleUser);
