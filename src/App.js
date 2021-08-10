import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/useDarkMode";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/index";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <Router>
        <GlobalStyles />
        <>
          <Navbar theme={theme} themeToggler={themeToggler} />
        </>
        <Routes theme={theme} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
