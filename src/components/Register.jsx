import React, {Component} from 'react'

class Register extends Component {
  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="box is-marginless has-background-primary">
        <h1 className="title has-text-centered">Register</h1>

        <form className="form has-text-centered" onSubmit={this.handleSubmit}>
          <div className="columns is-desktop is-centered">
            <div className="column is-two-thirds">
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Full Name</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded has-icons-left">
                      <input className="input" type="text" placeholder="First Name" />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user" />
                      </span>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control is-expanded has-icons-left">
                      <input className="input" type="text" placeholder="Last Name" />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Email Address</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded has-icons-left">
                      <input className="input" type="email" placeholder="Email" />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="columns is-centered">
                <div className="column is-two-thirds">
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
                          <input className="input" type="password" placeholder="Password" />
                          <span className="icon is-small is-left">
                            <i className="fas fa-key" />
                          </span>
                        </p>
                      </div>
                    </div>
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

export default Register
