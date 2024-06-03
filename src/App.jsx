
import { useState } from 'react'
import Setting from './setting/setting';

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
     <Setting/>
    </div>
  )
}

export default App;