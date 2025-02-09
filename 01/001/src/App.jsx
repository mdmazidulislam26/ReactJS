import './App.css'

function App() {

  let count = 0;

  let addValue = () => {
    count= count + 1;
    console.log(count);
  }
  let subValue = () => {
    count = count - 1;
    console.log(count);
  }

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
