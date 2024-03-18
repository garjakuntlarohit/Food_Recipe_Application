import React from "react";
import { Navigate} from "react-router-dom";

function MyRoute() {
  return (<Navigate to={"/home"} />);
}

export default MyRoute;
