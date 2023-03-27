import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App context="I am making this website to practice AppDev. (btw this sentence is being passed as  prop!)"/>
);