
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Navbar/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './components/Checkoout/Checkout';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
