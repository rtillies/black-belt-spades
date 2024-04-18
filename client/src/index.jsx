import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';

// Import our custom CSS and Bootstrap JS
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'
import './index.css'

// axios.defaults.baseURL = "render";
axios.defaults.baseURL = "http://localhost:5050/api";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>,
)
