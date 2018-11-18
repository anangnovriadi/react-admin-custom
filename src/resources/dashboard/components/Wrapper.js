import React, { Component } from 'react';
import Sidebar from '../../layout/Sidebar';

class Wrapper extends Component {
    render() {
        return(
            <div>
                <Sidebar link="/" />
                <nav className="breadcrumb sl-breadcrumb">
                    <a className="breadcrumb-item" href="index.html">Starlight</a>
                    <span className="breadcrumb-item active">Dashboard</span>
                </nav>
                <div className="sl-pagebody">
                    <div className="row row-sm">
                        <div className="col-sm-6 col-xl-3">
                            <div className="card pd-20 pd-sm-25">
                                <div className="d-flex align-items-center">
                                    <i className="fa fa-3x fa-suitcase"></i>
                                    <div className="mg-l-15">
                                        <p className="tx-uppercase tx-11 tx-spacing-1 tx-medium tx-gray-600 mg-b-8">Daily Sales</p>
                                        <h3 className="tx-bold tx-lato tx-inverse mg-b-0">$45,302</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="card pd-20 pd-sm-25 bg-primary">
                                <div className="d-flex align-items-center">
                                    <i className="fa fa-3x fa-truck tx-white"></i>
                                    <div className="mg-l-15">
                                        <p className="tx-uppercase tx-11 tx-spacing-1 tx-medium tx-white-5 mg-b-8">Daily Sales</p>
                                        <h3 className="tx-bold tx-lato tx-white mg-b-0">$45,302</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wrapper;