import React, { Component } from 'react';
import Sidebar from '../../layout/Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Wrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            open: false
        }

        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onOpenModal = () => {
        this.setState({ open: true });
    }
    
    onCloseModal = () => {
        this.setState({ open: false });
    }

    componentWillMount() {
        axios.post('http://18.219.201.200:8080/api/get-all-receipt', {}, 
        { headers: 
            { 
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDUxMjI3MDQsImlkIjoiMSJ9.AGl81BGTXpAgsVrhYystc_v3x_RzFx8WFjO45xv3bJs' 
            } 
        })
        .then((res) => {
            this.setState({
                list: res.data.data
            })
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    handleClick() {

    }

    handleSubmit() {

    }

    render() {
        const { open, list } = this.state;
        const { onCloseModal, onOpenModal } = this;
        return(
            <div>
                <Sidebar link="/" />
                <nav className="breadcrumb sl-breadcrumb">
                    <a className="breadcrumb-item" href="index.html">Starlight</a>
                    <span className="breadcrumb-item active">Transaction</span>
                </nav>
                <div className="sl-pagebody">
                    <div className="sl-page-title">
                        <h5>Data Table</h5>
                    </div>
                    <div className="card pd-20 pd-sm-40">
                        <h6 className="card-body-title">All Data Transaction</h6>
                        <p className="mg-b-20 mg-sm-b-20"></p>
                        <div className="table-wrapper">
                            <table id="datatable1" className="table display responsive nowrap">
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
                                    {
                                        list.map((key, i) => {
                                            return(
                                                <tr key={i} style={{ cursor: 'pointer' }}>
                                                    <td className="text-center" style={{ fontWeight: 'bold' }}>{key.Receipt.Id_transaction}</td>
                                                    <td className="text-center">{key.Receipt.BankName}</td>
                                                    <td className="text-center">{key.Receipt.AccountBankName}</td>
                                                    <td className="text-center">{key.Transaction.Total_prize}</td>
                                                    <td className="text-center">{key.Transaction.Status === '2' ? 'Sudah Konfirmasi' : 'Belum Konfirmasi'}</td>
                                                    <td className="text-center">
                                                        {
                                                            key.Transaction.Status === '2' ? (
                                                                ''
                                                            ) : (
                                                                <Link to={"/transaction-details/"+key.Receipt.ID}>
                                                                    <button style={{ cursor: 'pointer' }} className="btn btn-primary">Update</button>
                                                                </Link>
                                                            )
                                                        }
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

export default Wrapper;