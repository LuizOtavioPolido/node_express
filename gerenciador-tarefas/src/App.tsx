import { BrowserRouter, Route, Routes } from "react-router"
import ListagemTarefas from "./telas/ListagemTarefas/ListagemTarefas"
import NaoEncontrado from "./telas/NaoEncontrado"
import Tarefa from "./telas/Tarefa/Tarefa"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NaoEncontrado />}/>
        <Route path="/listagemTarefas" element={<ListagemTarefas />}/>
        <Route path="/tarefa" element={<Tarefa />} />
        <Route path="/tarefa/:id" element={<Tarefa />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
