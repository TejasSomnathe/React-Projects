import { useState } from 'react'

(setCount) => {
    count+=1;
}

function App() {
  const [count, setCount] = useState(1)
 
  
  return (
    <>
     <button onClick={()=>setCount(count + 1) }> count {count}</button>
     <button onClick={()=>setCount(count - 1) }> count {count}</button>
      
    </>
  )
}

export default App