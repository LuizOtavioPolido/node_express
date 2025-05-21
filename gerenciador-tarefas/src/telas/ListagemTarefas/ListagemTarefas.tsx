import { useNavigate } from "react-router";
import CardItem from "../../components/CardItem/CardItem";
import { ListagemTarefasStyled } from "./ListagemTarefasStyle";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";

type Task = {
  descricao: string;
  id: number;
  nome: string;
  status: string;
};

export default function ListagemTarefas() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  function removeTask(id: number){
    axios.delete(`http://localhost:3000/tarefas/${id}`).then((response) => {
      getData()
      return response
    })
  }

  function getData() {
    axios
      .get("http://localhost:3000/tarefas")
      .then((response) => {
        setTaskList(response.data);
        return response
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function renderList() {
    return taskList.map((item, index) => (
      <CardItem taskName={item.nome} key={`item-list-${index}`} onRemove={() => removeTask(item.id)}  onClick={() => navigate(`/tarefa/${item.id}`)}/>
    ));
  }

  return (
    <ListagemTarefasStyled.Container>
      <h1>Tarefas</h1>
      <ListagemTarefasStyled.Card>
        <ListagemTarefasStyled.ButtonDiv>
          <ListagemTarefasStyled.AddButton onClick={() => navigate("/tarefa")}>
            <FaPlus />
          </ListagemTarefasStyled.AddButton>
        </ListagemTarefasStyled.ButtonDiv>
        <ListagemTarefasStyled.ListDiv>
          {renderList()}
        </ListagemTarefasStyled.ListDiv>
      </ListagemTarefasStyled.Card>
    </ListagemTarefasStyled.Container>
  );
}
