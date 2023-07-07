import { Navigate } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";
import UserExport from "../contexts/UserContext";

function ProtectedRoute({ children }) {
  const { users } = useContext(UserExport.UserContext);

  if (!users) {
    return <Navigate to="/" replace />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ProtectedRoute;
