import React from 'react';
import {connect} from 'react-redux';

import {fetchUser} from '../store/reducers/users';
import NotFound from './NotFound';


class SingleUser extends React.Component {
  componentDidMount() {
    const userId = Number(this.props.match.params.id);
    this.props.fetchUser(userId)
  }

  render() {
    const {user} = this.props

    return user ? (
      <section className="section has-background-primary">
        <div className="box">
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img src={user.image} alt="User" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content has-text-centered">
                <p>
                  <strong>{user.username}</strong>
                  <br />
                  {user.firstName} {user.lastName}
                </p>
              </div>
            </div>
            <div class="media-right">
              <button class="button is-success">Add</button>
            </div>
          </article>
        </div>
      </section>
    ) : (
      <NotFound />
    );
  }
}

const mapState = state => ({
  user: state.users.single
})

const mapDispatch = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
})

export default connect(mapState, mapDispatch)(SingleUser);
