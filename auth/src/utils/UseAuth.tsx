import React from "react";
import AuthContext from "./AuthContext";

function UseAuth() {
    return React.useContext(AuthContext);
}
export default UseAuth;