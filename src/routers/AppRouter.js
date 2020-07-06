import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import LogInPage from "../components/LogInPage";
import PrivateRoute from './PrivateRoute'

export const history=createHistory()
//

const AppRouter = () => (
  <Router history={history}> 
    <div> 
      <Switch>
      <Route exact={true} path="/" component={LogInPage} />

        <PrivateRoute  path="/dashboard" component={ExpenseDashboardPage} />
        {/* this tells the router whenever it matches the path
      it should render this component */}
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
