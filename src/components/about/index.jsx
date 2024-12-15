import { useRef } from "react";
import { useScrollTrigger } from "../../utils/scroll_trigger";

export function About() {
  const sectionRef = useRef(null); // Reference to the section element

  useScrollTrigger(sectionRef, () => (console.log("Element is visible")));

  return (
    <div ref={sectionRef} className="flex justify-center align-middle w-full h-[20rem]">
      <hr className="h-4rem bg-green w-100" />
    </div>
  );
}