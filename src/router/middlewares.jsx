import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useUserStore } from "../stores/userStore";

export const VerifyUserAuthentication = ({ children }) => {
  const authenticated = useUserStore.getState().authenticated;

  if (authenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

VerifyUserAuthentication.propTypes = {
  children: PropTypes.node.isRequired,
};
