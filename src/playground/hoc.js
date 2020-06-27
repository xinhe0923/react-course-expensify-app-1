//higher order component(HOC) a component renders another component
//render himacking
//prop manipulation
//abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>info </h1>
    <p>the info is {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  // return const newreturn =(props)=>(

  return (props) => (
    <div>
      {props.isAdmin && <p>this is private infor please dont show</p>}
      <p>this is private info</p>
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthentication ? (
        <WrappedComponent {...props} />
      ) : (
        <p>please log in</p>
      )}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(Info); //wrape the component
ReactDOM.render(
  <AdminInfo isAdmin={false} info="there are some details" />,
  document.getElementById("app")
);
// ReactDOM.render(<AuthInfo isAuthentication={false} info="there are some details"/>,document.getElementById('app'))
