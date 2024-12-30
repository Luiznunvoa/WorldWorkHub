import { useEffect } from "react";

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
