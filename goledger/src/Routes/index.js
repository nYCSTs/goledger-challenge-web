import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import ListAlbuns from '../Pages/ListAlbuns';
import ArtistPage from '../Pages/ArtistPage';
import ListArtists from '../Pages/ListArtists';
import RegisterAlbum from '../Pages/RegisterAlbum';
import ListStreaming from '../Pages/ListStreaming';
import RegisterArtist from '../Pages/RegisterArtist';
import RegisterStreamingService from '../Pages/RegisterStreamingService';
import EditArtistPage from '../Pages/EditArtistPage';
import EditAlbumPage from '../Pages/EditAlbumPage';
import EditStreamingPage from '../Pages/EditStreamingPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      {/* Artists */}
      <Route path="/artists" exact component={ListArtists} />
      <Route path="/artist/register" exact component={RegisterArtist} />
      <Route path="/artist/edit/:id" exact component={EditArtistPage} />
      <Route path="/artist/:id" exact component={ArtistPage} />
      {/* Albuns */}
      <Route path="/albuns" exact component={ListAlbuns} />
      <Route path="/album/register" exact component={RegisterAlbum} />
      <Route path="/album/edit/:id" exact component={EditAlbumPage} />
      {/* Streaming */}
      <Route path="/streaming" exact component={ListStreaming} />
      <Route path="/streaming/register" exact component={RegisterStreamingService} />
      <Route path="/streaming/edit/:id" exact component={EditStreamingPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
