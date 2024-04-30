//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      react
       <h1>React JS CRUD Opertations</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
 </Routes>
      </BrowserRouter> 
      {/* <Home/>
      <Login/>
      <Register/> */}
    </div>
  );

};

export default App;
