import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import UserDataDeletion from "./pages/UserDataDeletion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Leaderboard from "./pages/Leaderboard";
import { GlobalColors } from "./Global";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  // eslint-disable-next-line
  String.prototype.format = function () {
    var a = this;
    for (var k in arguments) {
      a = a.replace("{" + k + "}", arguments[k]);
    }
    return a;
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
        <Navbar toggle={toggleSidebar} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/category/:categoryId" exact component={Category} />
          <Route path="/movies" component={Movies} />
          <Route path="/movie/:movieIdFromUrl" component={Movie} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/user-data-deletion" component={UserDataDeletion} />
        </Switch>
        <Footer />
        <svg width="0" height="0">
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop stopColor="white" offset="0%" />
            <stop stopColor={GlobalColors.OscarsGold} offset="90%" />
          </linearGradient>
        </svg>
      </div>
    </Router>
  );
}

export default App;
