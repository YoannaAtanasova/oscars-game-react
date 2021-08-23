import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import PrivacyPolicy from './PrivacyPolicy';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
         {/* <Route path="/" exact component={Home}/> */}
          <Route path="/privacy-policy" component={PrivacyPolicy}/>
        </Switch>
      </div>
    </Router>   
  );
}

export default App;
