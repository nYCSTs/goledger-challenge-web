import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Register from '../Pages/RegisterArtist';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/registrar/artista' exact component={Register} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;