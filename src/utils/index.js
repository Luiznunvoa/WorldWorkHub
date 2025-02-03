import { useEffect, useState } from "react";
import { useAppContext } from "../context/context";

/*
export function useScrollTrigger(
  ref,
  onEnterView,
  onExitView,
  options = { threshold: 0.5 },
) {
  useEffect(() => {
    const target = ref.current; // Capture the current value of ref.current at the start of the effect

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onEnterView?.(); // Call the function when the element enters the view
      } else {
        onExitView?.(); // Call the function when the element exits the view
      }
    }, options);

    if (target) {
      observer.observe(target); // Start observing the element
    }

    return () => {
      if (target) {
        observer.unobserve(target); // Use the captured reference to clean up the observation
      }
    };
  }, [ref, onEnterView, onExitView, options]);
}
*/

const localeCache = new Map(); // Global cache to store recent pages

/**
 * UseEffect that fetches the page contents with the specific language of the context
 * @param {String} page - string with the name of the page
 */
export function useFetchLocale(page) {
  const { language } = useAppContext(); // Current language from context

  // Initialize state with the cached translation if available
  const [translations, setTranslations] = useState(() => {
    const initialKey = `${language}/${page}`;
    return localeCache.get(initialKey) || null;
  });

  // Use an effect to fetch and update translations when language, translations, or page changes.
  useEffect(() => {
    // Construct a cache key based on language and page.
    const cacheKey = `${language}/${page}`;
    const cachedData = localeCache.get(cacheKey);

    // If cached data is available, update state if needed and exit early.
    if (cachedData) {
      if (translations !== cachedData) setTranslations(cachedData);
      return;
    }

    // Define an asynchronous function to fetch data.
    async function fetchData() {
      try {
        const response = await fetch(`/src/locales/${language}/${page}.json`);
        if (!response.ok) throw new Error("HTTP error " + response.status);
        const jsonData = await response.json();

        // Cache the retrieved data for future use and update translation.
        localeCache.set(cacheKey, jsonData);
        setTranslations(jsonData);
      } catch (error) {
        console.error(
          `Error loading /src/locales/${language}/${page}.json:`,
          error.message,
        );
        // In case of an error, if translations already exist, re-cache them.
        if (translations) localeCache.set(cacheKey, translations);
      }
    }
    // Execute the asynchronous data fetch.
    fetchData();
  }, [language, translations, page]); // Dependencies: re-run effect if language, translations, or page changes.
  return translations;
}

/**
 * Converts a string in the format "/pattern/flags" into a regular regex expression.
 * @param {String} patternString - string with the regex partern
 * @returns {RegExp}
 */
export function stringToRegex(patternString) {
  const match = patternString.match(/^\/(.+)\/([a-z]*)$/); // Match the string against the regex format.

  if (!match) {
    console.error(`Warning: Invalid regex format: ${patternString}`);
    return null;
  }

  const [, pattern, flags] = match; // Destructure the matched groups: pattern and flags.
  return new RegExp(pattern, flags);
}
