import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";

// builtin html


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={ExpenseDashboardPage} />
        {/* this tells the router whenever it matches the path
      it should render this component */}
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
