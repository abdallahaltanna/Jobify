import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};
export default ProtectRoute;
