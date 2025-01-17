import Home from "./pages/Home/home";
import { BrowserRouter, Routes, Route } from "react-router"
import { FormPage } from './pages/formulario/formulario.jsx'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/formulario' element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;