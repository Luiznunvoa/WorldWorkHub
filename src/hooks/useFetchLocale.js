import { useState, useEffect } from "react";
import { useAppContext } from "../context/context";

// Global cache to store fetched pages
const localeCache = new Map();

/**
 * Custom hook for fetching and caching locale translations.
 *
 * @param {string} page - The name of the page to fetch.
 * @returns {Object|null} - The translations object or null if not loaded.
 */
export function useFetchLocale(page) {
  const { language } = useAppContext(); // Get the current language from context
  const cacheKey = `${language}/${page}`;
  const [translations, setTranslations] = useState(() => localeCache.get(cacheKey) || null);

  useEffect(() => {
    // If data is already in cache, update state if needed and skip fetching
    if (localeCache.has(cacheKey)) {
      const cachedData = localeCache.get(cacheKey);
      if (translations !== cachedData) {
        setTranslations(cachedData);
      }
      // console.log("cache hit")
      return;
    }

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
          error.message
        );
      });
    // console.log("cache miss")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, cacheKey]);

  return translations;
}