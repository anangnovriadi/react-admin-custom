import React, { Component } from "react";
import Sidebar from "../../layout/Sidebar";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import swal from "sweetalert";
import _ from "lodash";
import { url } from '../../../helpers/url';
import { isAuth } from "../../../helpers/authentication";

const history = createBrowserHistory({ forceRefresh: true });

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    let params = this.props.match.params.id;
    axios
      .get(url+"/getservices/" + params, {
        headers: {
          Authorization: isAuth()
        }
      })
      .then(res => {
        this.setState({
          list: res.data.data
        });
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleClick(e) {
    e.preventDefault();
    let params = this.props.match.params.id;
    axios
      .get(url + "/update-services-status/" + params)
      .then(res => {
        swal({
          title: "Success",
          text: "Success Update Service",
          icon: "success",
          buttons: false
        });
        console.log(res)
        setTimeout(() => history.push("/service"), 1000);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
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
            <h6 className="card-body-title">Detils Data Service</h6>
            <div className="table-wrapper">
              <img style={{ width: "100%" }} src={list.Image} />              
              <div className="pt-2 pb-4">
                <li>{list.Title}</li>
                <li>{list.Description}</li>
                <li>{list.Educational_Level}</li>
                <li>{list.Nama}</li>
              </div>
              <button
                className="btn btn-secondary"
                onClick={this.handleClick}
                type="submit"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Wrapper);
