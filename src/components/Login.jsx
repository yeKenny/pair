import React, {Component} from 'react'

class Login extends Component {
  handleSubmit = event => {
    event.preventDefault()
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
                      <input className="input" type="text" placeholder="Username" />
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
                      <input className="input" type="text" placeholder="Password" />
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

export default Login
