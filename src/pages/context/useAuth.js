import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

// Using Context api
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;