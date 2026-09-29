import './assets/style.css';
import { useState } from 'react';

function App() {
  // criando o estado "tarefa" com o valor inicial (string vazia)
  const [tarefa, setTarefa] = useState('');

  // criando o estado que irá armazenar todas as tarefas
  const [listaDeTarefas, setListaDeTarefas] = useState([]);

  function adicionarTarefa() {
    if (!tarefa) return alert('Adicione uma tarefa válida!');

    setListaDeTarefas([...listaDeTarefas, tarefa]);
    setTarefa('');
  }

  function removerTarefas(index) {
    setListaDeTarefas(
      listaDeTarefas.filter((_, i) => i !== index)
    );
  }

  return (
    <div>
      <h1>Lista de tarefas</h1>

      <div className="adicionar-tarefa">
        <input
          onChange={(e) => setTarefa(e.target.value)}
          type="text"
          placeholder="Digite sua tarefa"
          value={tarefa}
        />

        <button onClick={adicionarTarefa}>
          Adicionar
        </button>
      </div>

      {/* agrupa todas as tarefas */}
      <div className="tarefas">
        {listaDeTarefas.map((tarefa, index) => (
          <div className="tarefa" key={index}>
            <p>{tarefa}</p>

            <button onClick={() => removerTarefas(index)}>
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


