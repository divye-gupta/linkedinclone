import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        console.log(userAuth);

        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((err) => console.log(err));
  };

  const register = (e) => {
    e.preventDefault();

    if (!name) return alert('Please enter a full name');

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
          const Obj = {
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: profilePic,
          };

          console.log('Registration successful');
          console.log(Obj);

          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: profilePic,
            })
          );
        })
        .catch((err) => alert(err.message));
    });
  };

  return (
    <div className='Login'>
      <img
        src='https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png'
        alt='LinkedIn Logo'
      />

      <form>
        <input
          placeholder='Full Name (required if registering)'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder='Profile Pic (Optional)'
          type='text'
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />

        <input
          placeholder='Email'
          type='email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder='Password'
          type='password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit' onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{' '}
        <span className='login__register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
