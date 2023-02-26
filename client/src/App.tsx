import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { attemptGetUser } from "./store/thunks/user";

import {
  ConfirmPage,
  HomePage,
  ProfilePage,
  LoginPage,
  ResetPasswordRequestPage,
  ResetPasswordPage,
  LogoutPage,
  RegisterPage,
} from "./pages";
import { ProtectedRoute, NavBar } from "./components";
import { useAppDispatch } from "./store/hooks";

export default function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(attemptGetUser())
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [dispatch]);

  return loading ? (
    <p>Loading</p>
  ) : (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path='/home' exact component={HomePage} />
        <Route path='/account/confirm/:token' exact component={ConfirmPage} />
        <Route path='/register' exact component={RegisterPage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/login/forgot' exact component={ResetPasswordRequestPage} />
        <Route path='/login/reset/:token' component={ResetPasswordPage} />
        <ProtectedRoute path='/logout' component={LogoutPage} />
        <ProtectedRoute path='/my-profile' component={ProfilePage} />
        <Redirect from='/' exact to='/home' />
        <Redirect to='/home' />
      </Switch>
    </React.Fragment>
  );
}
