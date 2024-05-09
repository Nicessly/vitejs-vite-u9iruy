
import React from 'react';
import Perfil from "./perfil.jpg"
import Perfil1 from "./perfil1.jpg"
import Feed from './card';

function FeedList() {
  return (
    <div className="feeds">
      <Feed
        profilePic={Perfil}
        userName="Lana Rose"
        photoSrc={Perfil}
        likedBy=""
        caption="Lorem ipsum dolor storiesquiquam eius."
        comments={[
          { user: 'User4', content: 'Great photo!' },
          { user: 'User5', content: 'Love it!' }
        ]} // Cambié esto para ser un array de objetos de comentario
      />
      <Feed
        profilePic={Perfil1}
        userName="Chris Brown"
        photoSrc={Perfil1}
        likedBy={['User6', 'User7']}
        caption="Lorem ipsum dolor storiesquiquam eius."
        comments={[
          { user: 'User8', content: 'Amazing!' },
          { user: 'User9', content: 'Nice shot!' }
        ]}
      />
    </div>
  );
}

export default FeedList;
