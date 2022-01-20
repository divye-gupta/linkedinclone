import React, { forwardRef } from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';
import InputOptions from './InputOptions';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(({ name, description, message }, ref) => {
  return (
    <div className='Post' ref={ref}>
      <div className='post__header'>
        <Avatar>{name[0]}</Avatar>
        <div className='post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className='post__body'>
        <p>{message}</p>
      </div>

      <div className='post__buttons'>
        <InputOptions Icon={ThumbUpIcon} title='Like' color='gray' />
        <InputOptions
          Icon={ChatBubbleOutlineIcon}
          title='Comment'
          color='gray'
        />
        <InputOptions Icon={ShareIcon} title='Share' color='gray' />
        <InputOptions Icon={SendIcon} title='Send' color='gray' />
      </div>
    </div>
  );
});

export default Post;
