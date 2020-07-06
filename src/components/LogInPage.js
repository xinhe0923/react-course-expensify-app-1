import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";


export const LogInPage = ({startLogin}) => (//destrructure
    <div>
      <button onClick={startLogin} >Log in</button>

    </div>
  );

const mapDispatchToProps=(dispatch)=>({
startLogin:()=>dispatch(startLogin())
}  )
export default connect(undefined,mapDispatchToProps)(LogInPage)