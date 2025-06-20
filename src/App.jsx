import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(null)
  const [s, setS] = useState(null)

  return (
    <>
     <h1>Contador</h1>
     <input className='contador' type='number' value={count} onChange={(e) => setCount(Number(e.target.value))}  style={{ width: `${String(count).length + 1}ch` }}/>
     <div className='boton'>
      <button  onClick={() => setCount((count) => count + s)} >+</button>
      <button  onClick={() => setCount((count) => 0)} >reiniciar contador</button>
     </div> 
     <div className='cantidades'>
      <label>añadir<br />
       <input className= 'añadir'type="number" value={s} onChange={(e) => setS(Number(e.target.value))} style={{ width: `${String(s).length + 1}ch` }} />
      </label>
     </div>
    </>
  )
}

export default App
 