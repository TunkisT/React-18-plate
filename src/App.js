import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotLoggedIn from './components/NotLoggedIn';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import Vip from './pages/Vip';
import AuthContext from './store/authContext';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  function login() {
    setIsLogged(true);
    console.log('app.js login');
  }
  function logout() {
    console.log('app.js logout');
    setIsLogged(false);
  }

  const ctxValue = {
    isLogged,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={ctxValue}>
      <div className='App'>
        <Header />
        <Switch>
          <ProtectedRoute path={'/'} exact>
            <h1>Home page works</h1>
          </ProtectedRoute>
          <Route path={'/login'}>
            <LoginPage />
          </Route>
          <ProtectedRoute path={'/vip'}>
            {isLogged ? <Vip /> : <NotLoggedIn />}
          </ProtectedRoute>
          <Route path={'*'}>
            <h2>Page not found</h2>
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
