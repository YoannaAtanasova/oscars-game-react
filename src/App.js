import './App.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import UserDataDeletion from './pages/UserDataDeletion';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import Movie from './pages/Movie';
import Movies from './pages/Movies';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
      <Router>
        <div className="App">
          <GlobalStyle/>
          <NavBar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/categories" exact component={Categories}/>
            <Route path="/category/:categoryId" exact component={Category}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/movie/:movieIdFromUrl" component={Movie}/>
            <Route path="/leaderboard" component={Leaderboard}/>
            <Route path="/privacy-policy" component={PrivacyPolicy}/>
            <Route path="/terms-of-service" component={TermsOfService}/>
            <Route path="/user-data-deletion" component={UserDataDeletion}/>
          </Switch>
          <Footer/>
          <svg width="0" height="0">
                <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop stopColor="white" offset="0%" />
                    <stop stopColor="#b69323" offset="90%" />
                </linearGradient>
          </svg> 
        </div>
      </Router> 
  );
}

export default App;
