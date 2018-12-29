import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../resources/layout/Sidebar";
import Header from "../resources/layout/Header";
import Footer from "../resources/layout/Footer";
import Dashboard from "../resources/dashboard";
import Transaction from "../resources/transaction";
import MustBePaid from "../resources/mustbepaid";
import Details from "../resources/details";
import DetailService from "../resources/detailService";
import Login from "../resources/auth/components/Wrapper";
import { createBrowserHistory } from "history";
import Service from "../resources/service";
import AuthRoute from "./AuthRoute";

const history = createBrowserHistory();

class Routes extends Component {
  render() {
    return (
      <Router>
        {history.location.pathname === "/login" ? (
          <div>
            <Switch>
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        ) : (
          <div>
            <Sidebar />
            <Header />
            <div className="sl-mainpanel">
              <Switch>
                {/* <Route exact path="/" component={Dashboard} /> */}
                <AuthRoute exact path="/" component={Transaction} />
                <Route path="/must-be-paid" component={MustBePaid} />
                <Route path="/transaction-details/:id" component={Details} />
                <Route path="/service" component={Service} />
                <Route path="/service-details/:id" component={DetailService} />
              </Switch>
              <Footer />
            </div>
          </div>
        )}
      </Router>
    );
  }
}

export default Routes;
