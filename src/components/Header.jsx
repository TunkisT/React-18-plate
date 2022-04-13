import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../store/authContext';

function Header() {
  const authCtx = useContext(AuthContext);

  return (
    <header className='header'>
      <h2>System</h2>
      <nav className='main-nav'>
        {authCtx.isLogged && <NavLink to={'/'}>Home</NavLink>}
        {authCtx.isLogged && <NavLink to={'/vip'}>Vip</NavLink>}
        {authCtx.isLogged && (
          <NavLink onClick={authCtx.logout} to={'/login'}>
            Logout
          </NavLink>
        )}
        {!authCtx.isLogged && <NavLink to={'/login'}>Login</NavLink>}
      </nav>
    </header>
  );
}

export default Header;
