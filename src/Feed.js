import React, { useState, useEffect } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import './Feed.css';

import InputOptions from './InputOptions';
import Post from './Post';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import FlipMove from 'react-flip-move';
import firebase from 'firebase';
import { db } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Feed() {
  const user = useSelector(selectUser);

  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    console.log(e);
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  };

  return (
    <div className='Feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />

          <form>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit' onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOptions Icon={ImageIcon} title='Photo' color='#70b5f9' />
          <InputOptions
            Icon={SubscriptionsIcon}
            title='Video'
            color='#e7a33e'
          />
          <InputOptions Icon={EventNoteIcon} title='Event' color='#c0cbcd' />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title='Write Article'
            color='#7fc15e'
          />
        </div>
      </div>

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
