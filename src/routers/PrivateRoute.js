import React from "react";
import { connect } from "react-redux";
import { Route ,Redirect} from "react-router-dom";
import { Header } from "../components/Header";

//use uppercase because we will finnaly render component
export const PrivateRoute = ({ isAuthenticated, component: Component,
...rest }) => (
    <Route {...rest} component={(props)=>(
isAuthenticated ? (
    <div>
        <Header/>
        <Component {...props} />

    </div>
):(
<Redirect to='/'/>
)
   ) } />
    //so route is not getting isauthenticated, 
);
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});
export default connect(mapStateToProps)(PrivateRoute);
