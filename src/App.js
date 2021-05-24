import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom"
import { useEffect } from 'react'
import HomePage from './pages/home/homePage'
import AboutPage from './pages/about/aboutPage'
import Navigation from './pages/components/nav'
import SubscribePage from './pages/subscribe/subscribePage'
import './Css/App.css'

//Function to scroll to top of page when navigating 
//to a new page. at the end of a page focus of page will
//be at the bottom of the page
const ScrollToTop = () => {
  const { pathname } = useLocation();
console.log(pathname)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
       
        <Router>
          <ScrollToTop />
          <Navigation />
          <Switch>
         
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/about'>
              <AboutPage />
            </Route>
            <Route path='/subscribe'>
              <SubscribePage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
