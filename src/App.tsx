import { useState } from 'react';
import { addDates, subtractDates } from "./lib/dateOperations";
import './App.css';

function App() {
  const [h, setH] = useState(0),
    [m, setM] = useState(0),
    [s, setS] = useState(0);

  function pnadd() {
    const h = window.prompt('enter hours'),
      m = window.prompt('enter hours'),
      s = window.prompt('enter hours');

    if (h != null && m != null && s != null) {
      var t = [
        parseInt(h),
        parseInt(m),
        parseInt(s)
      ];

      var ourDate = addDates(t, new Date());
      setH(ourDate.getHours());
      setM(ourDate.getMinutes());
      setS(ourDate.getSeconds());
    }
  }

  return (
    <div>
      <h1>hello world</h1>
      <span>{h}:{s}:{m}</span>
      <button className = "material-icons" onClick = {pnadd}>timer</button>
    </div>
  )
}

export default App;
