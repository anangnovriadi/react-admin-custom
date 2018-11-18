import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from '../resources/layout/Sidebar';
import Header from '../resources/layout/Header';
import Footer from '../resources/layout/Footer';
import Dashboard from '../resources/dashboard';
import Transaction from '../resources/transaction';

class Routes extends Component {
    render() {
        return(
            <Router>
                <div>
                    <Sidebar />
                    <Header />
                    <div className="sl-mainpanel">
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route path="/transaction" component={Transaction} />
                        </Switch>
                        <Footer />
                    </div>
                </div>
            </Router>
        )
    }
}

export default Routes;