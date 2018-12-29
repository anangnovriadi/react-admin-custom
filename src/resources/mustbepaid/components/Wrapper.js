import React, { Component } from 'react';
import Sidebar from '../../layout/Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { url } from '../../../helpers/url';

class Wrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            open: false
        }
    }

    componentWillMount() {
        axios.get(url+'/get-paid-schedule')
        .then((res) => {
            this.setState({
                list: res.data.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        const { list } = this.state;
        return(
            <div>
                <Sidebar link="/must-be-paid" />
                <nav className="breadcrumb sl-breadcrumb">
                    <a className="breadcrumb-item" href="index.html">Starlight</a>
                    <span className="breadcrumb-item active">Transaction</span>
                </nav>
                <div className="sl-pagebody">
                    <div className="sl-page-title">
                        <h5>Data Table</h5>
                    </div>
                    <div className="card pd-20 pd-sm-40">
                        <h6 className="card-body-title">All Data Must Be Paid</h6>
                        <p className="mg-b-20 mg-sm-b-20"></p>
                        <div className="table-wrapper">
                            <table id="datatable1" className="table display responsive nowrap">
                                <thead>
                                    <tr>
                                        <th className="wd-15p text-center">Id Transaksi</th>
                                        <th className="wd-10p text-center">Nama Bank</th>
                                        <th className="wd-10p text-center">Atas Nama</th>
                                        <th className="wd-15p text-center">No Reg</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        list.map((key, i) => {
                                            return(
                                                <tr key={i} style={{ cursor: 'pointer' }}>
                                                    <td className="text-center">{key.Transaction.ID}</td>
                                                    <td className="text-center" style={{ fontWeight: 'bold' }}>{key.BankDetail.BankName}</td>
                                                    <td className="text-center">{key.BankDetail.AccountName}</td>
                                                    <td className="text-center">{key.BankDetail.Norek}</td>
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

export default Wrapper;