import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import CausesPage from './pages/Causes/CausesPage';
import SingleCausePage from './pages/Causes/SingleCausePage/SingleCausePage';
import Events from './pages/Events/EventsPage';
import SingleEventPage from './pages/Events/SingleEventPage/SingleEventPage';
import Home from './pages/Home/Home';
import MembersPage from './pages/Members/MembersPage';
import News from './pages/News/News';
import NewsSinglePage from './pages/News/NewsSinglePage/NewsSinglePage';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Header />
        <Nav />
        <div>
          <Switch>
            <Route path="/members">
              <MembersPage />
            </Route>
            <Route path="/events/:slug">
              <SingleEventPage />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/news/:slug">
              <NewsSinglePage />
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
