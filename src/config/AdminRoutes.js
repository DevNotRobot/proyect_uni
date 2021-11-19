import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Admin from "../Pages/Admin";
// import Orders from "Pages/Admin/Orders";
// import Profile from "Pages/Admin/Profile";

export const AdminRoutes = () => {
  return (
    <>
      <Switch>
        {/* home */}
        <Route exact path="/admin" component={Admin} />
        {/* admin data */}
        {/* <Route exact path="/admin/ordes" component={Orders} /> */}
        {/* <Route exact path="/admin/profile" component={Profile} /> */}

        <Redirect to="/admin/error" />
      </Switch>
    </>
  );
};
