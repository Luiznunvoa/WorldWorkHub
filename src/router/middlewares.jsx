import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSessionStore } from "../stores/sessionStore";
import { useUsers } from "../hooks/useUsers";

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
  const { getUser } = useUsers();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        getUser();
      } catch (error) {
        console.error(error);
        throw new Error("Error fetching user");
      }
    };

    if (authenticated) {
      fetchUser();
    }
  }, [authenticated]);

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

ValidateSelectedProfile.propTypes = {
  children: PropTypes.node.isRequired,
};
