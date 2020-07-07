import React from "react";
import { connect } from "react-redux";
import { Route ,Redirect} from "react-router-dom";

//use uppercase because we will finnaly render component
export const PublicRoute = ({ isAuthenticated, component: Component,
...rest }) => (
    <Route {...rest} component={(props)=>(
!isAuthenticated ? (
    <div>
        <Component {...props} />

    </div>
):(
<Redirect to='/dashboard'/>
)
   ) } />
    //so route is not getting isauthenticated, 
);
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});
export default connect(mapStateToProps)(PublicRoute);
