import './App.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import UserDataDeletion from './pages/UserDataDeletion';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/privacy-policy" component={PrivacyPolicy}/>
          <Route path="/terms-of-service" component={TermsOfService}/>
          <Route path="/user-data-deletion" component={UserDataDeletion}/>
        </Switch>
        <Footer/>
      </div>
    </Router>   
  );
}

export default App;
