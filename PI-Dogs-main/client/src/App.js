import "./App.css";
import Dog from "./components/Dog/Dog";
import Home from "./components/DogsHome/Home";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [dogs, setDogs] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/dogs" element={<Home dogs={dogs} />} />
        <Route path="/dogs/:id" element={<Dog />} />
        <Route path="/dogs/add" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
