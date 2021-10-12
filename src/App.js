import Header from './components/Header';
import News from "./components/News";
import './App.css';
import React, { Component } from 'react';
import Categorys from './components/Categorys';
import { useState, useEffect } from 'react';

const App = () =>{

  const [categoria, setCategoria] = useState("general");

  return (
    <div>
        <Header />
        <div className="container">
          <Categorys setCategoria={setCategoria} />
          <News categoria={categoria} />
        </div>
    </div>
  )


}
export default App;
