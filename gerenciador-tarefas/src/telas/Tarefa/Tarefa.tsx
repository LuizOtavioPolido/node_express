import { useEffect, useState } from "react";
import { TarefaStyled } from "./TarefaStyle";
import { STATUS_TYPE } from "../../utils/constants";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

export default function Tarefa() {
  const [nameTask, setNameTask] = useState("");
  const [descriptionTask, setDescriptionTask] = useState("");
  const [statusTask, setStatusTask] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      axios
        .get(`http://localhost:3000/tarefas/${params.id}`)
        .then((response) => {
          console.log(response.data);
          setNameTask(response.data.nome);
          setDescriptionTask(response.data.descricao);
          setStatusTask(response.data.status);
        });
    }
  }, []);

  function updateTask() {
    const body = {
      nome: nameTask,
      descricao: descriptionTask,
      status: statusTask,
    };

    axios
      .put(`http://localhost:3000/tarefas/${params.id}`, body)
      .then((response) => {
        console.log(response.data);
        alert("Tarefa atualizada");
        setTimeout(() => {
          navigate("/listagemTarefas");
        }, 2000);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function createTask() {
    const body = {
      nome: nameTask,
      descricao: descriptionTask,
      status: statusTask,
    };

    axios
      .post("http://localhost:3000/tarefas", body)
      .then((response) => {
        console.log(response.data);
        alert("Tarefa criada");
        setTimeout(() => {
          navigate("/listagemTarefas");
        }, 2000);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  return (
    <TarefaStyled.Container>
      {params.id}
      <TarefaStyled.Card>
        <TarefaStyled.Input
          placeholder="Digite o nome da tarefa"
          value={nameTask}
          onChange={(e) => setNameTask(e.currentTarget.value)}
        />
        <TarefaStyled.Input
          placeholder="Digite o descrição da tarefa"
          value={descriptionTask}
          onChange={(e) => setDescriptionTask(e.currentTarget.value)}
        />
        <TarefaStyled.Select
          value={statusTask}
          onChange={(e) => setStatusTask(e.currentTarget.value)}
        >
          <option value={STATUS_TYPE.C}>{STATUS_TYPE.C}</option>
          <option value={STATUS_TYPE.I}>{STATUS_TYPE.I}</option>
        </TarefaStyled.Select>

        <TarefaStyled.CreateTaskButton onClick={params.id ? updateTask : createTask}>
          {params.id ? 'Atualizar' : 'Criar' }
        </TarefaStyled.CreateTaskButton>
      </TarefaStyled.Card>
    </TarefaStyled.Container>
  );
}
