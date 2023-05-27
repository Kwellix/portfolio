import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './popup.css';
import "./assets/fonts/DaysOne-Regular.ttf"
import App from './App';
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </React.StrictMode>
);
