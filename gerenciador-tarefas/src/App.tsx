import { BrowserRouter, Route, Routes } from "react-router"
import ListagemTarefas from "./telas/ListagemTarefas/ListagemTarefas"
import NaoEncontrado from "./telas/NaoEncontrado"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NaoEncontrado />}/>
        <Route path="/listagemTarefas" element={<ListagemTarefas />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
