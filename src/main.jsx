import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Reset from './style/ResetCSS.js'
import Global from './style/Globalcss.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global/>
    <Reset/>
    <App />
  </React.StrictMode>,
)
