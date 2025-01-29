import { useState, useEffect, createContext, useContext } from "react";

export const AppContext = createContext();

/**
* Custom hook to access the AppContext
*/
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};

/**
* Custom hook to manage the app's language logic
*/
export const useAppLogic = () => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  /**
  * Function to toggle between "en" and "pt"
  */
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "pt" : "en"));
  };

  return { language, toggleLanguage };
};
