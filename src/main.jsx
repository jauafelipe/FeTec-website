import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import App from './App.jsx'
import { FormPage } from './pages/formulario/formulario.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/formulario' element={<FormPage />} />
    </Routes>
  </BrowserRouter>
)
