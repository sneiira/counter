import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(null)
  const [s, setS] = useState(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
  // Activa la animación al cambiar count
    if (count !== null) {
      setAnimate(true)
      const timeout = setTimeout(() => setAnimate(false), 500)
      return () => clearTimeout(timeout)
    }
  }, [count])

  return (
    <>
     <h1>Counter</h1>
     <input className={`counter ${animate ? 'animate' : ''}`} type='number' value={count} onChange={(e) => setCount(e.target.value === "" ? null : Number(e.target.value))}  style={{ width: `${String(count).length + 1}ch` }}/>
     <div className='generic-buttons'>
      <button className='button1' onClick={() => setCount((count) => count + s)} >+</button>
      <button  className = 'button2' onClick={() => {setCount((count) => 0); setS((s) => 0)}} >reset</button>
     </div> 
     <div className='cuantities'>
      <label>agregate<br />
       <input className= 'agregate'type="number" value={s} onChange={(e) => setS(e.target.value === "" ? null : Number(e.target.value))} style={{ width: `${String(s).length + 1}ch` }} />
      </label>
     </div>
    </>
  )
}

export default App
 