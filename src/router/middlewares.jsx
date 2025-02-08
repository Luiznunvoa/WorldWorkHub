import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/userStore";

/**
 * If the user is not logged in return to the login page 
 *
 * @example
 * <VerifyUserAuthentication>
 *     <YourComponent />
 * </VerifyUserAuthentication>
 */
export function VerifyUserAuthentication({ children }) {
  const token = useUserStore.getState().accessToken;
  const navigate = useNavigate();

  if (token) {
    navigate("/")
  }

  return <>{children}</>;
}

VerifyUserAuthentication.propTypes = {
  children: PropTypes.node.isRequired 
}
