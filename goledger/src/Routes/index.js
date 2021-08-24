import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomePage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;