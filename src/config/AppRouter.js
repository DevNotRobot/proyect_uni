// import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { AdminRoutes } from "./AdminRoutes";

// import { useDispatch, useSelector } from "react-redux";
// import { startChecking } from "../actions/auth";
import Navbar from "../components/Public/Navbar";
import Footer from "../components/Public/Footer";

// auth
import Home from "../Pages/Public/Home";
import AboutUsPage from "../Pages/Public/AboutUsPage";
import ContactUsPage from "../Pages/Public/ContactUsPage";
import LoginPage from "../Pages/Public/LoginPage";
import RegisterPage from "../Pages/Public/RegisterPage";
import Error404 from "../Pages/Public/Error404";

export const AppRouter = () => {
  //   const dispatch = useDispatch();
  //   const { checking, accessToken } = useSelector((state) => state.auth);

  //   useEffect(() => {
  // dispatch(startChecking());
  //   }, [dispatch]);

  //   if (checking) {
  // return <CircularProgress />;
  //   }
  const accessToken = "";

  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutus" component={AboutUsPage} />
        <Route exact path="/contactus" component={ContactUsPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/error" component={Error404} />
        {/* <Route exact path="/account/error" component={Error404} /> */}

        <PrivateRoute
          path="/admin"
          component={AdminRoutes}
          isAuthenticated={!!accessToken}
        />

        <Redirect to="/error" />
      </Switch>

      {/* Footer */}
      <Footer />
    </Router>
  );
};
