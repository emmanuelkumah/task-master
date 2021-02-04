import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navigation/NavBar";
import About from "./components/pages/About";
import Features from "./components/pages/Features";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

//style default mui theme

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f64740",
    },
    secondary: {
      main: "#49111C",
    },
    typography: {
      fontFamily: ["Montserrat", "Roboto"].join(","),
      // fontFamily: "Montserrat, Arial",
    },
    // overrides: {
    //   MuiCssBaseline: {
    //     "@global": {
    //       "@font-face": [montserrat],
    //     },
    //   },
    // },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/features" exact component={Features} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
