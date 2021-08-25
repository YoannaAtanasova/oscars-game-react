import NavBar from './components/NavBar';
import PrivacyPolicy from './pages/PrivacyPolicy';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
         {/* <Route path="/" exact component={Home}/> */}
          <Route path="/privacy-policy" component={PrivacyPolicy}/>
        </Switch>
      </div>
    </Router>   
  );
}

export default App;
