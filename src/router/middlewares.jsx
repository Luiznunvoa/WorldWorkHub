import { useEffect, useRef } from "react";
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
  const hasFetchedUser = useRef(false);
  const authenticated = useSessionStore((store) => store.authenticated);
  const { getUser } = useUsers();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await getUser();
      } catch (error) {
        console.error(error);
        throw new Error("Error fetching user");
      }
    };

    console.log("why")
    // Making sure that will try to fetch only once
    if (authenticated && !hasFetchedUser.current) {
      fetchUser();
      hasFetchedUser.current = true;
    }
  }, [authenticated, getUser]);

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

ValidateSelectedProfile.propTypes = {
  children: PropTypes.node.isRequired,
};
