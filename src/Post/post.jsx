

import React, { useState } from 'react';
import './post.css';
import Perfil from "./perfil.jpg";
import { UilImagePlus } from '@iconscout/react-unicons';


function Post() {
 const [imageVisible, setImageVisible] = useState(false);


 const handleImageClick = () => {
   setImageVisible(true);
 };


 return (
   <main className='mover'>
       <div className="middle">
     <form className="create-post">
       <div className="profile-pic">
         <img src={Perfil} alt="Profile" />
       </div>
       <input type="text" className="in" placeholder="What's on your mind?" />
       <div className="ba-container">
         <label htmlFor="image-upload" className="add-photo" onClick={handleImageClick}>
           <UilImagePlus />
         </label>
         {imageVisible && (
           <input type="file" id="image-upload" accept="image/*" className="input-image" />
         )}
       </div>
       <input type="submit" value="Post" className="btn btn-primary" />
     </form>
     </div>
   </main>
 );
}


export default Post;
