import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  const value = { userInfo, setUserInfo };
  return <AuthContext.Provider {...props} value={value}></AuthContext.Provider>;
}

export { AuthProvider };
