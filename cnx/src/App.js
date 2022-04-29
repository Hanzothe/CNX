import React from "react";
import Navbar from "./components/barranav/";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./paginas";
import CNX from "./paginas/cnx";
import Planos from "./paginas/planos";
import Eventos from "./paginas/eventos";
import Inscreva from "./paginas/inscreva";
import Login from "./paginas/login";
import "./stilin.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cnx" element={<CNX />} exact />
          <Route path="/planos" element={<Planos />} exact />
          <Route path="/eventos" element={<Eventos />} exact />
          <Route path="/inscreva" element={<Inscreva />} exact />
          <Route path="/login" element={<Login />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
