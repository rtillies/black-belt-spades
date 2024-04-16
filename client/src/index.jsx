import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'

// Import our custom CSS and Bootstrap JS
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
