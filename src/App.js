import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import CausesPage from './pages/Causes/CausesPage';
import SingleCausePage from './pages/Causes/SingleCausePage/SingleCausePage';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Header />
        <Nav />
        <div>
          <Switch>
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
