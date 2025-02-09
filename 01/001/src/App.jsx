import { useState } from 'react';
import './App.css'

function App() {

  let [count, setCounter] = useState(0);

  let addValue = () => setCounter(++count);

  let subValue = () => setCounter(--count);

  return (
    <>
      <h1>Hay I am Mazidul Islam</h1>
      <h2>Here is your counting value {count}</h2><br />
      <button
      onClick={addValue}
      >add</button>
      <button
      onClick={subValue}
      >sub</button>
    </>
  )
}

export default App
