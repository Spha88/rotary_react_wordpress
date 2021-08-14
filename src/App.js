import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import CausesPage from './pages/Causes/CausesPage';
import SingleCausePage from './pages/Causes/SingleCausePage/SingleCausePage';
import Events from './pages/Events/EventsPage';
import SingleEventPage from './pages/Events/SingleEventPage/SingleEventPage';
import Home from './pages/Home/Home';
import MemberSinglePage from './pages/Members/MemberSinglePage/MemberSinglePage';
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

            <Route path="/members/:slug" component={MemberSinglePage} />
            <Route path="/members" component={MembersPage} />

            <Route path="/events/:slug" component={SingleEventPage} />
            <Route path="/events" component={Events} />

            <Route path="/news/:slug" component={NewsSinglePage} />
            <Route path="/news" component={News} />

            <Route path="/causes/:slug" component={SingleCausePage} />
            <Route path="/causes" component={CausesPage} />

            <Route path="/" component={Home} />

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
