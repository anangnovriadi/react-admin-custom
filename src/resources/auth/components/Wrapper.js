import React, { Component } from "react";

class Wrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="form-body">
            <form action="" className="col-form">
              <div className="col-logo" />
              <header>Login Form</header>
              <fieldset>
                <section>
                  <div className="form-group has-feedback">
                    <label className="control-label">Email</label>
                    <input
                      className="form-control"
                      placeholder="E-mail"
                      type="text"
                    />
                  </div>
                </section>
                <section>
                  <div className="form-group has-feedback">
                    <label className="control-label">Password</label>
                    <input
                      className="form-control"
                      placeholder="Password"
                      type="password"
                    />
                  </div>
                </section>
              </fieldset>
              <footer className="text-right">
                <button type="button" className="btn btn-info pull-right">
                  Login
                </button>
              </footer>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Wrapper;
