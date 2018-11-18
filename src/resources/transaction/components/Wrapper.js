import React, { Component } from 'react';
import Sidebar from '../../layout/Sidebar';

class Wrapper extends Component {
    render() {
        return(
            <div>
                <Sidebar link="/transaction" />
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
                                        <th className="wd-15p">First name</th>
                                        <th className="wd-15p">Last name</th>
                                        <th className="wd-20p">Position</th>
                                        <th className="wd-15p">Start date</th>
                                        <th className="wd-10p">Salary</th>
                                        <th className="wd-25p">E-mail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tiger</td>
                                        <td>Nixon</td>
                                        <td>System Architect</td>
                                        <td>2011/04/25</td>
                                        <td>$320,800</td>
                                        <td>t.nixon@datatables.net</td>
                                    </tr>
                                    <tr>
                                        <td>Tiger</td>
                                        <td>Nixon</td>
                                        <td>System Architect</td>
                                        <td>2011/04/25</td>
                                        <td>$320,800</td>
                                        <td>t.nixon@datatables.net</td>
                                    </tr>
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