import React, { useState } from "react";

const ThemeContext = React.createContext();
const ThemeProvider = ({ children }) => {
  const themeValue = localStorage.getItem("theme") ? localStorage.getItem("theme") : { board: true };
  const [theme, setTheme] = useState(themeValue);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
