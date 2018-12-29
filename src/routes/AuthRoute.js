import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuth } from "../helpers/authentication";

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    // eslint-disable-next-line no-confusing-arrow
    render={props =>
      // eslint-disable-next-line implicit-arrow-linebreak
      isAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: window.location.reload() } }}
        />
      )
    }
  />
);

export default AuthRoute;
