import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import './App.css';
import { auth } from './firebase';
import { logout, login, selectUser } from './features/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from 'react-router-dom';
import Home from './Home';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      console.log(userAuth);

      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <Router>
      <div className='App'>
        {/* header */}
        <Header />
        {!user ? (
          <Login />
        ) : (
          <div className='app__body'>
            <Sidebar />

            <Feed />

            <Widgets />
          </div>
        )}
        {
        <Switch>
          <Route path='/home' component={Home} />
        </Switch> }
        </div>
    </Router>
  );
}

export default App;
