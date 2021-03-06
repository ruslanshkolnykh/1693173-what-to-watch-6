import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Login from '../login/login';
import Main from '../main/main';
import MyList from '../my-list/my-list';
import Films from '../films/films';
import Player from '../player/player';
import NotFound from '../not-found/not-found';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
          />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/mylist">
          <MyList
          />
        </Route>
        <Route exact path="/films/:id">
          <Films />
        </Route>
        <Route exact path="/films/:id/review">
          <Films />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
