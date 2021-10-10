import Header from './components/Header';
import News from "./components/News";
import './App.css';
import React, { Component } from 'react';
import Categorys from './components/Categorys';
import { useState, useEffect } from 'react';

const App = () =>{

  const [news, setNews] = useState([]);

  const [categoria, setCategoria] = useState("general");

  useEffect(()=>{
    consultarNews();
  }, [categoria]);

  const consultarNews = () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=d1866c1b2a6e44ef8f1b4ef376be42cb` ;
    fetch(url).then(res => {
      return res.json();
    }).then(news => {
      setNews(news.articles);
    })
  }

  return (
    <div>
        <Header />
        <div className="container">

          <Categorys setCategoria={setCategoria} />
          <News news={news} />
          {console.log(categoria)}
        </div>
    </div>
  )


}
export default App;
