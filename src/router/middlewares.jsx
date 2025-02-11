import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSessionStore } from "../stores/sessionStore";

export const VerifyUserAuthentication = ({ children }) => {
  const authenticated = useSessionStore.getState().authenticated;

  if (authenticated) {
    return <Navigate to="/list" replace />;
  }

  return children;
};

VerifyUserAuthentication.propTypes = {
  children: PropTypes.node.isRequired,
};

export const ValidateSelectedProfile = ({ children }) => {
  const authenticated = useSessionStore((store) => store.authenticated);

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

ValidateSelectedProfile.propTypes = {
  children: PropTypes.node.isRequired,
};
