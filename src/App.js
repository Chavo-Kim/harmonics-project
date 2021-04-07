import React from "react";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {MainPage} from "./pages/Main/MainPage";

const DefaultTheme = createMuiTheme({
  palette: {
    default: {
      main: '#02343F'
    },
    primary: {
      main: '#02343F',
      //contrastText: '#13d213',
    },
    background: {
      main: '#F0EDCC'
    },
    text: {
      primary: '#02343F',
      secondary: '#9CA18F'
    }
  }
})

const Router = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            render={()=><MainPage />}
          />
        </Switch>
      </BrowserRouter>
  )
}

const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
