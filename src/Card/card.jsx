
import React, { useState } from 'react';
import './card.css';
import { UilEllipsisV } from '@iconscout/react-unicons';
import { UilHeart } from '@iconscout/react-unicons';
import { UilCommentAltDots } from '@iconscout/react-unicons';

function Feed({ profilePic, userName, photoSrc, likedBy, caption, comments }) {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <main className='mover'>
      <div className="middle"></div>
      <div className="feed">
        <div className="head"></div>
        <div className="user">
          <div className="profile-pic">
            <img src={profilePic} alt="" />
          </div>
          <div className="info">
            <h3>{userName}</h3>
          </div>
        </div>
        <div className="photo">
          <img src={photoSrc} alt="" className="photo-image" />
        </div>
        <div className="action-button">
          <button><UilHeart/></button>
          <button onClick={toggleComments}><i><UilCommentAltDots/></i></button>
        </div>
        <div className="caption">
          <p>{caption}</p>
        </div>
        {showComments && (
          <div className="comments">
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>
                  <strong>{comment.user}: </strong>
                  {comment.content}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}

export default Feed;
