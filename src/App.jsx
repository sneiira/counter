import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [s, setS] = useState(1)



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
      <button className='button1' onClick={() => setCount((count) => count + s)} >+</button>
      <button  className = 'button2' onClick={() => {setCount((count) => 0); setS((s) => 1)}} >reset</button>
     </div> 
     <div className='cuantities'>
      <label>agregate<br />
       <input className= 'agregate'type="number" value={s} onChange={(e) => setS(e.target.value === "" ? null : Number(e.target.value))}
        style={{ width: `${String(s).length + 1}ch`, maxWidth: '200px' }} />
      </label>
     </div>
    </>
  )
}

export default App
  