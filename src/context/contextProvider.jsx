import PropTypes from "prop-types";
import { AppContext, useAppLogic } from "./context";

export const AppProvider = ({ children }) => {
  const contextValue = useAppLogic();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};