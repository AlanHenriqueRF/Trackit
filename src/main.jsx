import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Reset from './style/ResetCSS.js'
import Global from './style/Globalcss.js'
import { LoginProvider } from './providers/UserContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Global />
    <Reset />
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>
)
