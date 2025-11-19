import React, { use } from "react";
import authContext from "../context/AuthContext/AuthContext";

const useAuth = () => {
  const authInfo = use(authContext);
  return authInfo;
};

export default useAuth;
