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

/**
 * Fetches page contents with the specific language of the context
*/
export function useFetchLocale(page) {
  const { language } = useAppContext(); // Retrieve the current language from the app context.
  const [translations, setTranslations] = useState(null); // State to store the fetched translations.

  useEffect(() => {
    // Fetches the localization file whenever the language or page changes.
    async function fetchData() {
      try {
        const response = await fetch(`/src/locales/${language}/${page}.json`);
        const jsonData = await response.json(); // Parse the JSON response.
        setTranslations(jsonData); // Update the state with the fetched translations.
      } catch (error) {
        console.error(`Error: Impossible to load page content in /src/locales/${language}/${page}.json:`, error);
      }
    }

    fetchData();
  }, [language, page]); // Re-run the effect whenever language or page changes.

  return translations; 
}

/**
 * Converts a string in the format "/pattern/flags" into a regular regex expression.
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
