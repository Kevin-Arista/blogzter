// import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom'
import axios from 'axios';
import BlogComponent from './components/blog-component';
import NavComponent from './components/nav-component';

function App(props) {
  const subject = "Hello Kevin!";

  // const api = axios.create({
  //   baseURL: `http://localhost:4000`
  //   // baseURL: process.env.baseURL
  // });

  // let [blogList, setBlogList] = useState();
  
  // api.get('/blogs').then(res =>{
  //   setBlogList(res.data)
  //   console.log(process.env.URL)
  // });

  return (
    <div className="App">
      <NavComponent></NavComponent>
      <header className="App-header">
        <Outlet></Outlet>
      </header>
      
    </div>
  );
}

export default App;