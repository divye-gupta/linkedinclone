import React from 'react';
import Avatar from '@mui/material/Avatar';
import './HeaderOptions.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { Link } from 'react-router-dom';

function HeaderOptions({ Icon, title, avatar, onClick, onRoute }) {
  const user = useSelector(selectUser);
  // props.Icon or props.title

  if (onRoute) {
    return (
      <Link to='/home'>
        <div className='Header-Options' onClick={onClick}>
          {Icon && <Icon className='headerOption__icon' />}
          {/* {avatar && (
            <Avatar className='headerOption__icon'>
              {user?.displayName[0]}
            </Avatar>
          )} */}
          <h3 className='headerOption__title'>{title}</h3>
        </div>
      </Link>
    );
  }

  return (
    <div className='Header-Options' onClick={onClick}>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && (
        <Avatar className='headerOption__icon'>{user?.displayName[0]}</Avatar>
      )}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  );
}

export default HeaderOptions;
