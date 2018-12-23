import React, { Component } from "react";
import Sidebar from "../../layout/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      open: false
    };
  }

  componentWillMount() {
    axios
      .post(
        "http://18.219.201.200:8080/api/getallservices",
        {},
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDU4MzQyMjgsImlkIjoiNCJ9.yrRf0gQSTadfvs4kI_B7MatVmjHk9mVdFDB4P_AClvk"
          }
        }
      )
      .then(res => {
        this.setState({
          list: res.data.data
        });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.props.match);
    const { list } = this.state;
    return (
      <div>
        <Sidebar link="/service" />
        <nav className="breadcrumb sl-breadcrumb">
          <a className="breadcrumb-item" href="index.html">
            Starlight
          </a>
          <span className="breadcrumb-item active">Service</span>
        </nav>
        <div className="sl-pagebody">
          <div className="sl-page-title">
            <h5>Data Table</h5>
          </div>
          <div className="card pd-20 pd-sm-40">
            <h6 className="card-body-title">All Data Service</h6>
            <p className="mg-b-20 mg-sm-b-20" />
            <div className="table-wrapper">
              <table
                id="datatable1"
                className="table display responsive nowrap"
              >
                <thead>
                  <tr>
                    <th className="wd-10p text-center">Id</th>
                    <th className="wd-15p text-center">Nama</th>
                    <th className="wd-20p text-center">Description</th>
                    <th className="wd-20p text-center">Salary</th>
                    <th className="text-center">Level</th>
                    <th className="text-center">Verifikasi</th>
                    <th className="text-center">Experience</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((key, i) => {
                    return (
                      <tr key={i} style={{ cursor: "pointer" }}>
                        <td
                          className="text-center"
                          style={{ fontWeight: "bold" }}
                        >
                          {key.ID}
                        </td>
                        <td className="text-center">{key.Nama}</td>
                        <td className="text-center">{key.Description}</td>
                        <td className="text-center">{key.Salary}</td>
                        <td className="text-center">{key.Educational_Level}</td>
                        <td className="text-center">{key.Verification}</td>
                        <td className="text-center">{key.Experiance}</td>
                        <td className="text-center">
                          <Link to={"/service-details/" + key.ID}>
                            <button
                              style={{ cursor: "pointer" }}
                              className="btn btn-primary"
                            >
                              Update
                            </button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Wrapper);
