
import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    document.title = `React Hooks | Count: ${count}`;
  }, [count]);

  return (
    <div className="container">
      <h1>React Hooks Practical</h1>
      <p>Learning React Hooks in VS Code</p>

      <div className="card">
        <h2>1. useState - Counter</h2>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>

      <div className="card">
        <h2>2. useEffect - Side Effect</h2>
        <p>Current count: {count}</p>
        <p>Browser tab title updates when count changes.</p>
      </div>

      <div className="card">
        <h2>3. useRef - Input Focus</h2>
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button onClick={() => inputRef.current.focus()}>
          Focus Input
        </button>
        <h3>Hello, {name || "Student"}!</h3>
      </div>
    </div>
  );
}

export default App;
