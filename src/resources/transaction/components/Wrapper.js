import React, { Component } from "react";
import Sidebar from "../../layout/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { isAuth } from "../../../helpers/authentication";

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
        "http://18.219.201.200:8080/api/get-all-receipt",
        {},
        {
          headers: {
            Authorization: isAuth()
          }
        }
      )
      .then(res => {
        if (res.data.status == "success") {
          this.setState({
            list: res.data.data
          });
        } else {
          localStorage.clear();
          history.push("/");
        }
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
        <Sidebar link="/" />
        <nav className="breadcrumb sl-breadcrumb">
          <a className="breadcrumb-item" href="index.html">
            Starlight
          </a>
          <span className="breadcrumb-item active">Transaction</span>
        </nav>
        <div className="sl-pagebody">
          <div className="sl-page-title">
            <h5>Data Table</h5>
          </div>
          <div className="card pd-20 pd-sm-40">
            <h6 className="card-body-title">All Data Transaction</h6>
            <p className="mg-b-20 mg-sm-b-20" />
            <div className="table-wrapper">
              <table
                id="datatable1"
                className="table display responsive nowrap"
              >
                <thead>
                  <tr>
                    <th className="wd-10p text-center">Id Transaksi</th>
                    <th className="wd-15p text-center">Nama Bank</th>
                    <th className="wd-20p text-center">Akun Bank</th>
                    <th className="wd-20p text-center">Total Harga</th>
                    <th className="text-center">Status</th>
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
                          {key.Receipt.Id_transaction}
                        </td>
                        <td className="text-center">{key.Receipt.BankName}</td>
                        <td className="text-center">
                          {key.Receipt.AccountBankName}
                        </td>
                        <td className="text-center">
                          {key.Transaction.Total_prize}
                        </td>
                        <td className="text-center">
                          {key.Transaction.Status === "2"
                            ? "Sudah Konfirmasi"
                            : "Belum Konfirmasi"}
                        </td>
                        <td className="text-center">
                          {key.Transaction.Status === "2" ? (
                            ""
                          ) : (
                            <Link to={"/transaction-details/" + key.Receipt.ID}>
                              <button
                                style={{ cursor: "pointer" }}
                                className="btn btn-primary"
                              >
                                Update
                              </button>
                            </Link>
                          )}
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
