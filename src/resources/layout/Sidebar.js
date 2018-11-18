import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="sl-logo">
                    <a href=""><i className="icon ion-android-star-outline"></i> starlight</a>
                </div>
                <div className="sl-sideleft">
                    <label className="sidebar-label">Navigation</label>
                    <div className="sl-sideleft-menu">
                        <a href="/" className={this.props.link === '/' ? 'sl-menu-link active' : 'sl-menu-link'}>
                            <div className="sl-menu-item">
                                <i className="menu-item-icon icon ion-ios-home-outline tx-22"></i>
                                <span className="menu-item-label">Dashboard</span>
                            </div>
                        </a>
                        <a href="/transaction" className={this.props.link === '/transaction' ? 'sl-menu-link active' : 'sl-menu-link'}>
                            <div className="sl-menu-item">
                                <i className="menu-item-icon icon ion-ios-photos-outline tx-20"></i>
                                <span className="menu-item-label">Transaksi</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;