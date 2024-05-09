
import { useState } from 'react'
import './App.css'
import Nav from "./Nav/nav";
import Menu from './Menu/menu';
import Post from './Post/post';
import FeedList from './Card/CardList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav/> 
      <div className="container">
        <main>
          <Menu/>
          <div className="post-and-feed">
            <Post/>
            <FeedList/>
          </div>
          <Menu/>
        </main>
      </div>
    </div>
  )
}

export default App
