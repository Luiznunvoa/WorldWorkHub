import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { AppContext } from "../utils";

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "pt" : "en"));
  };

  return (
    <AppContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
