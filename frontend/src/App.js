// import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';


function App(props) {
  const subject = "Hello Kevin!";

  const api = axios.create({
    baseURL: `http://localhost:4000`
  });

  let [blogList, setBlogList] = useState();
  
  api.get('/blogs').then(res =>{
    console.log(res.data)
    setBlogList(res.data)
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {subject}
          {props.context}
        </p>
        {blogList?.map(blog => <div>{blog.content}</div>)}
      </header>
    </div>
  );
}

export default App;