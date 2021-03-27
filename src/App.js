import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.js'
import View from './Components/View'
import Offer from './Components/Offer'
import Cart from './Components/Cart'


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
      <div className="App">
        <Switch>
          <Route exact path ="/" component={Home}/>
          <Route exact path="/view" component={View} />
          <Route exact path="/offer" component={Offer} />
          <Route exact path="/cart" component={Cart}/>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
