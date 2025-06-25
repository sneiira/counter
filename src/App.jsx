import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [sum, setSum] = useState(1)



  return (
    <>
     <h1>Counter</h1>
       <span 
        className="counter"
        style={ {width: `${String(count).length + 1}ch` }}
      >
        {count}
      </span>
     <div className='generic-buttons'>
      <button className='button1' onClick={() => setCount((count) => count + sum)} >+</button>
      <button  className = 'button2' onClick={() => {setCount(0); setSum(1)}} >reset</button>
     </div> 
     <div className='cuantities'>
      <label>agregate<br />
       <input className= 'agregate'type="number" value={sum} onChange={(e) => setSum(e.target.value === "" ? null : Number(e.target.value))}
        style={{ width: `${String(sum).length + 1}ch` }} />
      </label>
     </div>
    </>
  )
}

export default App
  