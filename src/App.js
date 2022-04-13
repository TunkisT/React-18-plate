import { useState } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import Vip from './pages/Vip';
import AuthContext from './store/authContext';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  function login() {
    // setIsLogged(true);
    console.log('app.js login');
  }
  function logout() {
    console.log('app.js logout');
    // setIsLogged(false);
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
          <Route path={'/'} exact>
            <h1>Home page</h1>
          </Route>
          <Route path={'/login'}>
            <LoginPage />
          </Route>
          <Route path={'/vip'}>
            <Vip />
          </Route>
          <Route path={'*'}>
            <h2>Page not found</h2>
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
