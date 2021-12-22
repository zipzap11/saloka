import React from "react";
import { useSelector } from "react-redux";
import { Route, useHistory } from "react-router-dom";

function PrivateRoute({ path, component }) {
  const history = useHistory();
  const isLogin = useSelector((state) => state.user.isLogin);
  if (!isLogin) {
    history.replace("/login");
  }
  return <Route to={path} exact component={component} />;
}

export default PrivateRoute;
