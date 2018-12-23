import React, { Component } from "react";
import Sidebar from "../../layout/Sidebar";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import swal from "sweetalert";
import _ from "lodash";

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
      .get("http://18.219.201.200:8080/api/getservice/" + params)
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

  handleClick(e) {
    e.preventDefault();
    let params = this.props.match.params.id;
    axios
      .get("http://18.219.201.200:8080/api/update-services-status/" + params)
      .then(res => {
        swal({
          title: "Success",
          text: "Success Update Service",
          icon: "success",
          buttons: false
        });
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
            <p className="mg-b-20 mg-sm-b-20" />
            <div className="table-wrapper">
              <form>
                {list.map((key, i) => {
                  return (
                    <div key={i}>
                      <img style={{ width: "100%" }} src={key.Receipt.Image} />
                      <ul className="pt-4">
                        <li>{key.Receipt.AccountBankName}</li>
                        <li>{key.Receipt.BankName}</li>
                        <li>{key.Transaction.Total_prize}</li>
                      </ul>
                    </div>
                  );
                })}
                <button
                  className="btn btn-secondary"
                  onClick={this.handleClick}
                  type="submit"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Wrapper);
