import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CadastroUsuario } from "./CadastroUsuario";
import { HomePage } from "./HomePage";
import { Login } from "./Login";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/cadastro-usuario" element={<CadastroUsuario/>} />
        <Route path="/home-page" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}