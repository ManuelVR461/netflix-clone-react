import './App.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import {Home, SignIn, SignUp, Browse } from './pages'
import { useAuthListener } from './hooks'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'

function App() {
  const {user} = useAuthListener()

  return (
    <Router>
        <Switch>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                <SignUp/>
            </IsUserRedirect>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                <SignIn/>
            </IsUserRedirect>
            <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                <Browse />
            </ProtectedRoute>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
                <Home/>
            </IsUserRedirect>
        </Switch>
    </Router>
  );
}

export default App;
