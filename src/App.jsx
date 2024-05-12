
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from "./Nav/nav";
import Menu from './Menu/menu';
import Post from './Post/post';
import FeedList from './Card/CardList';
import BuscarPersonas from './Buscar/buscar';
import CalendarioB from './Calendario/calendarioB';
import BuscarPersonasPage from './BuscarPersonasPage/BuscarPersonasPage';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <Menu />
              <main>
                <div className="post-and-feed">
                  <Post />
                  <FeedList />
                </div>
                <CalendarioB />
              </main>
            </Route>
            <Route path="/buscar-personas">
              <BuscarPersonasPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
