import { useState } from 'react';
import './App.css'

function App() {

  let [count, setCounter] = useState(0);

  let addValue = () => {
    if (count < 20) {
      setCounter(++count);
    }else{
      setCounter("boka coda ne tui")
    }
  }

  let subValue = () => {
    if (count > 0) {
      setCounter(--count);
    }else{
      setCounter("boka coda ne tui")
    }
  };

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
