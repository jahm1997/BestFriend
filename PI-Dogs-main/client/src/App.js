import "./App.css";
import React from "react";
import Dog from "./components/Dog/Dog";
import Home from "./components/DogsHome/Home";
import Form from "./components/Form/Form";
// import Navbar from "./components/Navbar/Navbar";
import Bienvenido from "./components/Bienvenida/Bienvenido";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  // const location = useLocation();

  return (
    <div className="App">
      {/* {location.pathname === "/" ? <Bienvenido /> : <Navbar />} */}
      <Routes>
        <Route path="/" element={<Bienvenido />} />
        <Route path="/dogs" element={<Home />} />
        <Route path="/dogs/:id" element={<Dog />} />
        <Route path="/dogs/add" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
