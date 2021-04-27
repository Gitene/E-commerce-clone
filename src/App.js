import React, { useEffect} from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Navbar/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './components/Checkoout/Checkout';
import Login from './components/Login/Login';
//import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import {useStateValue} from './components/Stateprovider/StateProvider';


function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
    <div className="App">
      
      <Switch>
        <Route path="/login" exact>
          <Login />
          
        </Route>
        <Route path="/checkout" exact>
          <Header />
          <Checkout />
        </Route>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
