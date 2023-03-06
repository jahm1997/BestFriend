import "./App.css";
import Dog from "./components/Dog/Dog";
import Home from "./components/DogsHome/Home";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import Bienvenido from "./components/Bienvenida/Bienvenido";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";

function App() {
  const location = useLocation();

  const [dogs, setDogs] = useState([]);

  return (
    <div className="App">
      {location.pathname === "/" ? <Bienvenido /> : <Navbar />}
      <Routes>
        <Route path="/dogs" element={<Home dogs={dogs} />} />
        <Route path="/dogs/:id" element={<Dog />} />
        <Route path="/dogs/add" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
