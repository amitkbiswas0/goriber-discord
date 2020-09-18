import React from "react";
import { Route, Redirect } from "react-router-dom";

// auth service
import { isAuthenticated } from "../../services/authentication";

function ProtectedRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuthenticated() ? (
          children
        ) : (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        );
      }}
    />
  );
}

export default ProtectedRoute;
