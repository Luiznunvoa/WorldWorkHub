import { useState, useEffect, createContext, useContext } from "react";
import Cookies from "js-cookie";

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
 * Custom hook to manage the app's language and token logic
 */
export const useAppLogic = () => {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "en",
  );
  const [token, setToken] = useState(() => Cookies.get("authToken") || null);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  /**
   * Function to toggle between "en" and "pt"
   */
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "pt" : "en"));
  };

  const destroyToken = () => {
    Cookies.remove("authToken");
    setToken(null);
  };

  const updateToken = () => {
    setToken(Cookies.get("authToken") || null);
  };

  return { language, toggleLanguage, token, destroyToken, updateToken };
};
