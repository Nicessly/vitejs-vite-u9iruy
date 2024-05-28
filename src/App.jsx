import { useState } from 'react'
import Chat from './Chat/chat';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Chat/>
    </div>
  )
}

export default App;