import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { isLogout } from "../../helpers/authentication";

const history = createBrowserHistory({ forceRefresh: true });

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    isLogout();
    history.push("/login");
  }

  render() {
    return (
      <div>
        <div className="sl-header">
          <div className="sl-header-left">
            <div className="navicon-left hidden-md-down">
              <a id="btnLeftMenu" href="">
                <i className="icon ion-navicon-round" />
              </a>
            </div>
            <div className="navicon-left hidden-lg-up">
              <a id="btnLeftMenuMobile" href="">
                <i className="icon ion-navicon-round" />
              </a>
            </div>
          </div>
          <div className="sl-header-right">
            <nav className="nav">
              <div className="dropdown">
                <a href="" className="nav-link nav-link-profile">
                  <span onClick={this.handleClick} className="logged-name">
                    Logout
                  </span>
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
