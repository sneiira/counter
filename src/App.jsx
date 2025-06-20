import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(null)
  const [s, setS] = useState(null)
  const [r, setR] = useState(null)

  return (
    <>
     <h1>Contador</h1>
     <input className='contador' type='number' value={count} onChange={(e) => setCount(Number(e.target.value))}  style={{ width: `${String(count).length + 1}ch` }}/>
     <div className='boton'>
      <button  onClick={() => setCount((count) => count + s)} >+</button>
      <button  onClick={() => setCount((count) => count - r)} >-</button>
      <button  onClick={() => setCount((count) => 0)} >reiniciar contador</button>
     </div> 
     <div className='cantidades'>
      <label>Sumar:<br />
       <input className= 's-r'type="number" value={s} onChange={(e) => setS(Number(e.target.value))} style={{ width: `${String(s).length + 1}ch` }} />
      </label>
        <label>Restar: <br />
       <input className='s-r' type="number" value={r} onChange={(e) => setR(Number(e.target.value))} style={{ width: `${String(count).length + 1}ch` }} />
       </label>
     </div>
    </>
  )
}

export default App
 