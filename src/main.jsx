import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter}  from 'react-router-dom'
import BagContextProvider from './context/BagContext.jsx'

createRoot(document.getElementById('root')).render(

   <StrictMode>
    <BagContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </BagContextProvider>
   </StrictMode>,
  
)
