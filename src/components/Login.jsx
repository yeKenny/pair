import React, {Component} from 'react'
import {connect} from 'react-redux'

import {login} from '../store/reducers/users'

class Login extends Component {
  handleSubmit = event => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    this.props.login({username, password})
    this.props.history.push('/home')
  }

  render() {
    return (
      <div className="box is-marginless has-background-primary">
        <h1 className="title has-text-centered">Log In</h1>

        <form className="form has-text-centered" onSubmit={this.handleSubmit}>
          <div className="columns is-desktop is-centered">
            <div className="column is-half">
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Username</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded has-icons-left">
                      <input className="input" type="text" name="username" placeholder="Username" />
                      <span className="icon is-small is-left">
                        <i className="fas fa-child" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Password</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded has-icons-left">
                      <input className="input" type="password" name="password" placeholder="Password" />
                      <span className="icon is-small is-left">
                        <i className="fas fa-key" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <button className="button is-danger" type="submit" value="Submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  login: formData => dispatch(login(formData))
})

export default connect(null, mapDispatch)(Login)
