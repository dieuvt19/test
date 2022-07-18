import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue();
  };
  return (
    <div className="App">
      <input type="text" value={value} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
