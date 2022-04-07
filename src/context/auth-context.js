import { createContext, useContext, useReducer } from "react";
import { passwordReducer } from "../reducer/auth-reducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, passwordDispatch] = useReducer(passwordReducer, {
    display: "none",
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
    isEmailValid: true,
    userName: ""
  });
  return (
    <AuthContext.Provider value={{ state, passwordDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
