import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import CausesPage from './pages/Causes/CausesPage';
import SingleCausePage from './pages/Causes/SingleCausePage/SingleCausePage';
import Home from './pages/Home/Home';
import News from './pages/News/News';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Header />
        <Nav />
        <div>
          <Switch>
            <Route path="/news/:slug">
              <h2>News single page</h2>
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/causes/:slug">
              <SingleCausePage />
            </Route>
            <Route path="/causes">
              <CausesPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
