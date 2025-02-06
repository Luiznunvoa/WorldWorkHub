import { useState, useEffect } from "react";
import { usePreferencesStore } from "../stores/preferencesStore";

// Global cache to store fetched page contents
const localeCache = new Map();

/**
 * Custom hook for fetching and caching locale t.
 *
 * @param {string} page - The name of the page to fetch.
 * @returns {Object|null} - The t object or null if not loaded.
 */
export function useLocale(page) {
  const { language } = usePreferencesStore(); // Get the current language from context
  const cacheKey = `${language}/${page}`; // Creates a cache key based on the context
  const [t, setTranslations] = useState( // Tries to get the translation in cache
    () => localeCache.get(cacheKey) || null,
  );

  useEffect(() => {
    // If data is already in cache, update state if needed and skip fetching
    if (localeCache.has(cacheKey)) {
      const cachedData = localeCache.get(cacheKey);
      if (t !== cachedData) {
        setTranslations(cachedData);
      }
      // console.log("cache hit")
      return;
    }

    // Else, data must be fetched
    fetch(`/src/locales/${language}/${page}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Cache the fetched data and update state
        localeCache.set(cacheKey, data);
        setTranslations(data);
      })
      .catch((error) => {
        console.error(
          `Error loading /src/locales/${language}/${page}.json:`,
          error.message,
        );
      });
    // console.log("cache miss")

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, cacheKey]); // UseEffect triggers every time the page/cacheKey or the language context change

  const clearCache = () => {
    localeCache.clear();
  };

  return {
    t,
    clearCache,
  };
}
