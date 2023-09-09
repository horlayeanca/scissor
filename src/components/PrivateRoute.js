import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useContext(UserAuth);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!user ? <element {...routeProps} /> : <Navigate to="/" />
      }
    />
  );
};

export default PrivateRoute;
