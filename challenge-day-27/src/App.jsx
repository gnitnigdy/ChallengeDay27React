import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [name, setName] = useState("");
  // const [count, setCount] = useState(1);
  // const [count1, setCount1] = useState(5);
  // const toggleName = () => {
  //   setName((prevName) => (prevName === "Fariz" ? "Rizky" : "Fariz"));
  // };

  // const handleInput = (e) => {
  //   setName(e.target.value);
  // };
  // const addNumber = () => {
  //   setCount((prevNumber) => prevNumber + 1);
  // };

  // const minNumber = () => {
  //   setCount1((prevNumber) => {
  //     if (prevNumber <= 0) {
  //       return 0;
  //     } else {
  //       return prevNumber - 1;
  //     }
  //   });
  // };

  const multiple = () => {
    setHasil(parseInt(angka1 * angka2));
  };

  const [hasil, setHasil] = useState(0);
  const [angka1, setAngka1] = useState("");
  const [angka2, setAngka2] = useState("");

  const setNum1 = (event) => {
    setAngka1(parseInt(event.target.value));
  };

  const setNum2 = (event) => {
    setAngka2(parseInt(event.target.value));
  };
  return (
    <>
      <h1>Hasil : {hasil}</h1>
      <div style={{ marginBottom: 20 }}>
        <label>Angka 1</label>
        <input type="text" onChange={setNum1}></input>
      </div>
      <div>
        <label>Angka 2</label>
        <input type="text" onChange={setNum2}></input>
      </div>

      <button onClick={multiple}>Perkalian</button>
    </>
  );
}

export default App;
