import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserExport from "../contexts/UserContext";

function ProtectedRoute() {
  const { user } = useContext(UserExport.UserContext);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
