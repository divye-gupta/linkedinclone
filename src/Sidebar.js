import React from 'react';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

import './Sidebar.css';

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className='sidebar__recentItem'>
        <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className='Sidebar'>
      <div className='sidebar__top'>
        <img src='https://images.unsplash.com/photo-1529333242387-8c6c002a52d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' />

        <Avatar src={user.photoUrl ? user.photoUrl : ''}>
          {user.displayName[0]}
        </Avatar>

        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>3000</p>
        </div>

        <div className='sidebar__stat'>
          <p>Views on posts</p>
          <p className='sidebar__statNumber'>6969</p>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('Google')}
        {recentItem('internships')}
        {recentItem('web development')}
      </div>
    </div>
  );
};

export default Sidebar;
