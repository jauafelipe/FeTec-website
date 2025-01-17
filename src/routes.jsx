import { BrowserRouter, Routes, Route } from "react-router"
import { Home } from "./pages/Home/home"
import { FormPage } from "./pages/formulario/formulario"

export const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/formulario" element={<FormPage />} />
            </Routes>
        </BrowserRouter>
    )
}