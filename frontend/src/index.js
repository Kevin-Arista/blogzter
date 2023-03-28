import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Blogs from './pages/blogs';
import Forms from './pages/forms';
import Home from './pages/home';
import About from './pages/about'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App context="I am making this website to practice AppDev. (btw this sentence is being passed as  prop!)"/>}>
                <Route index element={<Home/>} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="forms" element={<Forms />} />
                <Route path="about" element={<About/>}/>
            </Route>
            
        </Routes>
    </BrowserRouter>
);