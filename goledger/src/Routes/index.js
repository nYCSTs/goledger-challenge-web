import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Register from '../Pages/RegisterArtist';
import ListArtists from '../Pages/ListArtists';
import ListAlbuns from '../Pages/ListAlbuns';
import ArtistPage from '../Pages/ArtistPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/artistas" exact component={ListArtists} />
      <Route path="/artista/register" exact component={Register} />
      <Route path="/albuns" exact component={ListAlbuns} />
      <Route path="/artist/:id" exact component={ArtistPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
