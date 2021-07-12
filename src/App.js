import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Header />
        <Nav />
        <div>
          <Switch>
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
