import { useEffect, useRef } from "react";

// A custom useEffect hook that only triggers on updates, not on initial mount
export default function useUpdateEffect(callback, dependencies = []) {
  // A ref to store the initial render flag
  const isInitialMount = useRef(true);

  useEffect(() => {
    // If it is the initial render, set the flag to false and skip the callback
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      // Otherwise, it is an update, so call the callback function
      callback();
    }
  }, dependencies);
}
