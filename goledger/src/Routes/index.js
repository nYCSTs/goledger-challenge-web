import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Register from '../Pages/RegisterArtist';
import ListArtists from '../Pages/ListArtists';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/artistas" exact component={ListArtists} />
      <Route path="/artista/register" exact component={Register} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
