import React, { Component } from "react";
import Sidebar from "../../layout/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { createBrowserHistory } from "history";
import { withRouter } from "react-router-dom";
import { isAuth } from "../../../helpers/authentication";
import { url } from '../../../helpers/url';

const history = createBrowserHistory({ forceRefresh: true });

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      open: false
    };

    // this.handleClickY = this.handleClickY.bind(this);
  }

  componentWillMount() {
      axios.get(url+'/get-cancelled')
      .then((res) => {
          this.setState({
              list: res.data.data
          })

          console.log(this.state)
      })
      .catch((err) => {
          console.log(err)
      })
  }

  handleClickY(id) {

    let formData = new FormData();
    formData.append("id_schedule", id);

     axios
      .post(url+"/update-cancelled-schedule",
        formData,
        {
          headers: {
            Authorization: isAuth()
          }
        }
      )
      .then(res => {
        swal({
          title: "Success",
          text: "Success",
          icon: "success",
          buttons: false
        });
        setTimeout(() => history.push("/canceled"), 1000);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleClickN(id) {
    let formData = new FormData();
    formData.append("id_schedule", id);

     axios
      .post(url+"/update-nocancelled-schedule",
        formData,
        {
          headers: {
            Authorization: isAuth()
          }
        }
      )
      .then(res => {
        swal({
          title: "Success",
          text: "Success",
          icon: "success",
          buttons: false
        });
        setTimeout(() => history.push("/canceled"), 1000);
      })
      .catch(err => {
        console.log(err);
      });
  }

  

  render() {
    const { list } = this.state;
    return (
      <div>
        <Sidebar link="/canceled" />
        <nav className="breadcrumb sl-breadcrumb">
          <a className="breadcrumb-item" href="index.html">
            Starlight
          </a>
          <span className="breadcrumb-item active">Canceled</span>
        </nav>
        <div className="sl-pagebody">
          <div className="sl-page-title">
            <h5>Data Table</h5>
          </div>
          <div className="card pd-20 pd-sm-40">
            <h6 className="card-body-title">All Data Canceled</h6>
            <p className="mg-b-20 mg-sm-b-20" />
            <div className="table-wrapper">
              <table
                id="datatable1"
                className="table display responsive nowrap"
              >
                <thead>
                  <tr>
                      <th className="wd-5p text-center">Id Transaksi</th>
                      <th className="wd-20p text-center">Deskripsi</th>
                      <th className="wd-10p text-center">No Reg</th>
                      <th className="wd-10p text-center">Atas Nama</th>
                      <th className="wd-20p text-center">Action</th>
                  </tr>
                </thead>
                  <tbody>
                      {
                        list === null ? (
                          <div style={{padding: '2px'}}>Kosong</div>
                        ) :
                        list.map((key, i) => {
                            return(
                                <tr key={i} style={{ cursor: 'pointer' }}>
                                    <td className="text-center">{key.Transaction.ID}</td>
                                    <td className="text-center" style={{ fontWeight: 'bold' }}>{key.Schedule.Description}</td>
                                    <td className="text-center">{key.BankDetail.BankName}</td>
                                    <td className="text-center">{key.BankDetail.AccountBankName}</td>
                                    <td className="text-center">
                                        <div className="row">
                                          <div className="pl-4 pr-2">
                                            <button
                                              onClick={() => this.handleClickY(key.Schedule.ID)}
                                              style={{ cursor: "pointer" }}
                                              className="btn btn-secondary"
                                            >
                                            Accepted
                                            </button>
                                          </div>
                                          <div className="pl-2 pr-2">
                                            <button
                                              onClick={() => this.handleClickN(key.Schedule.ID)}
                                              style={{ cursor: "pointer" }}
                                              className="btn btn-info"
                                            >
                                            Rejected
                                            </button>
                                          </div>
                                        </div>
                                        
                                    </td>
                                </tr>
                            )
                        })
                      }
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
