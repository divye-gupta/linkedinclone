import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Header.css';
import HeaderOptions from './HeaderOptions';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    console.log('clicked');

    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className='Header'>
      <div className='Header__left'>
        <img src='./assets/images/linkedinlogo.png' alt='linkedin-icon' />

        <div className='Header__search'>
          <SearchIcon />
          <input type='text' placeholder='Search ...' />
        </div>
      </div>

      <div className='Header__right'>
        <HeaderOptions Icon={HomeIcon} title='Home' onRoute={'Link'} />
        <HeaderOptions Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOptions Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOptions Icon={ChatIcon} title='Messaging' />
        <HeaderOptions Icon={NotificationsIcon} title='Notifications' />
        <HeaderOptions avatar={true} title='Me' onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
