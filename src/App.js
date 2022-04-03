import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/theme.config';
import ResponsiveAppBar from './components/navbar';


function App() {
  return (
    <Router>

      <ThemeProvider theme={theme}>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route  path="/home">
          <Home />
        </Route>
        <Route  path="/nav">
          <ResponsiveAppBar />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

      </ThemeProvider>

    </Router>
  )
}

export default App;
