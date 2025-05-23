import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";

function App({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved preference or use system preference
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) return savedMode === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    // Save preference to localStorage
    localStorage.setItem("darkMode", darkMode.toString());

    // Apply class to body
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <ThemeProvider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeProvider>
  );
}

export default App;
