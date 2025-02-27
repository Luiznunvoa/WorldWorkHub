import { useEffect, useRef, useCallback } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useSessionStore } from "../stores/sessionStore";
import { useUsers } from "../hooks/useUsers";
import { useRequestStore, STATE } from "../stores/requestStore";

/*
 * useResetRequestState hook resets the request state when the pathname changes
 */
const useResetRequestState = () => {
  const { pathname } = useLocation();
  const setState = useRequestStore((state) => state.setState);

  useEffect(() => {
    setState(STATE.IDLE);
  }, [pathname, setState]);
};

/**
 * VerifyUserAuthentication component checks if a user is authenticated
 *
 * @param {object} props - The component props
 * @param {React.ReactNode} props.children - The child components to render if the user is not authenticated
 * @returns {React.ReactNode} The children components or a redirect to the other page
 */
export const VerifyUserAuthentication = ({ children }) => {
  const authenticated = useSessionStore((store) => store.authenticated);

  useResetRequestState();

  if (authenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

VerifyUserAuthentication.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * ValidateSelectedProfile component ensures that a user is authenticated and their profile is fetched
 *
 * @param {object} props - The component props
 * @param {React.ReactNode} props.children - The child components to render if the user is authenticated
 * @returns {React.ReactNode} The children components or a redirect to the login page
 */
export const ValidateSelectedProfile = ({ children }) => {
  const hasFetchedUser = useRef(false);
  const authenticated = useSessionStore((store) => store.authenticated);
  const { getUser } = useUsers();
    
  useResetRequestState();

  // Function to fetch the user profile
  const fetchUser = useCallback(async () => {
    try {
      await getUser();
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching user");
    }
  }, [getUser]);

  // Effect to fetch user profile if authenticated and not already fetched
  useEffect(() => {
    if (authenticated && !hasFetchedUser.current) {
      fetchUser();
      hasFetchedUser.current = true;
    }
  }, [authenticated, fetchUser]);

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

ValidateSelectedProfile.propTypes = {
  children: PropTypes.node.isRequired,
};
