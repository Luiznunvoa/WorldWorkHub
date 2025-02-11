import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useRequestStore, STATE } from "../stores/requestStore";
import { useSessionStore } from "../stores/sessionStore";
import { useUserStore, initialState } from "../stores/userStore";
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
  const user = useUserStore((state) => state.user);
  const { setState } = useRequestStore();
  const { getUser, getNewToken } = useUsers();

  React.useEffect(() => {
    if (!authenticated) return;

    if (user !== initialState) {
      console.log("Já tinha", user);
      return;
    }

    console.log("Não tinha, mas vamos buscar...");

    const checkUser = async () => {
      try {
        setState(STATE.LOADING);
        await getUser();
        setState(STATE.SUCCESS);
        console.log("Achou direto");
      } catch (error) {
        console.error(error);
        try {
          await getNewToken();
          await getUser();
          setState(STATE.SUCCESS);
          console.log("Precisou dar refresh");
        } catch (error2) {
          console.error(error2);
          alert("Erro inesperado");
          setState(STATE.ERROR);
        }
      }
    };

    checkUser();
  }, []);

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

ValidateSelectedProfile.propTypes = {
  children: PropTypes.node.isRequired,
};

