import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, initialValue) => {
  const [values, setValues] = useLocalStorage(key, initialValue);

  useEffect(() => {
    //if darkMode is true, then we add the class to the body tag, if false, we remove it
    if (!values) {
      document.querySelector("body").classList.remove("dark-mode");
    } else {
      document.querySelector("body").classList.add("dark-mode");
    }
  }, [values]);

  return [values, setValues];
};
