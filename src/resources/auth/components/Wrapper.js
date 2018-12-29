import React, { Component } from "react";
import axios from "axios";
import { createBrowserHistory } from "history";
import { url } from '../../../helpers/url';

const history = createBrowserHistory({ forceRefresh: true });

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      show: "none",
      textAlert: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);

    let axiosConfig = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*"
      }
    };

    axios
      .post(url+"/login", formData, axiosConfig)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        this.setState({
          show: "block",
          textAlert: "Success"
        });
        setTimeout(() => history.push("/"), 400);
      })
      .catch(err => {
        this.setState({
          show: "block",
          textAlert: "Failed"
        });
        console.log(err);
      });
  }

  render() {
    const { handleSubmit, handleChange } = this;
    return (
      <div>
        <div className="wrapper">
          <div className="form-body">
            <form
              style={{ marginBottom: "12px" }}
              onSubmit={handleSubmit}
              className="col-form"
            >
              <div className="col-logo" />
              <header>Login Form</header>
              <fieldset>
                <section>
                  <div className="form-group has-feedback">
                    <label className="control-label">Email</label>
                    <input
                      name="email"
                      onChange={handleChange}
                      className="form-control"
                      placeholder="E-mail"
                      type="email"
                    />
                  </div>
                </section>
                <section>
                  <div className="form-group has-feedback">
                    <label className="control-label">Password</label>
                    <input
                      name="password"
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Password"
                      type="password"
                    />
                  </div>
                </section>
              </fieldset>
              <footer className="text-right">
                <button type="submit" className="btn btn-info pull-right">
                  Login
                </button>
              </footer>
            </form>
            <div
              style={{ display: this.state.show }}
              className="alert alert-success col-form"
            >
              {this.state.textAlert}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wrapper;
