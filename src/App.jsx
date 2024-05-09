import { useState } from 'react'
import './App.css'
import Nav from "./Nav/nav";
import Menu from './Menu/menu';
import Post from './Post/post';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav/> 
      <Menu/>
      <Post/>
      </div> 

  )
}

export default App
