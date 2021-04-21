import './App.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'

import {Home, SignIn, SignUp, Browse } from './pages'

function App() {
  return (
    <Router>
        <Switch>
            <Route path={ROUTES.SIGN_UP}>
                <SignUp/>
            </Route>
            <Route path={ROUTES.SIGN_IN}>
                <SignIn/>
            </Route>
            <Route path={ROUTES.BROWSE}>
                <Browse />
            </Route>
            <Route path={ROUTES.HOME}>
                <Home/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
