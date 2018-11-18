import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <div>
                <div className="sl-header">
                    <div className="sl-header-left">
                        <div className="navicon-left hidden-md-down"><a id="btnLeftMenu" href=""><i className="icon ion-navicon-round"></i></a></div>
                        <div className="navicon-left hidden-lg-up"><a id="btnLeftMenuMobile" href=""><i className="icon ion-navicon-round"></i></a></div>
                    </div>
                    <div className="sl-header-right">
                        <nav className="nav">
                            <div className="dropdown">
                                <a href="" className="nav-link nav-link-profile" data-toggle="dropdown">
                                    <span className="logged-name">Jane<span className="hidden-md-down"> Doe</span></span>
                                    <img src="../img/img3.jpg" className="wd-32 rounded-circle" alt="" />
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;