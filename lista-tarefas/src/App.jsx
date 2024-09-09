import { useEffect, useState } from 'react';
import Tarefa from './listaTarefas';
function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  useEffect(() => {
    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
    if (tarefasSalvas){
      setTarefas(tarefasSalvas);
    }
  }, []);

  useEffect(() => {
    if (tarefas.length){
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }
  }, [tarefas]);

  const adicionarTarefa = () => {
    if (novaTarefa.trim()) {
      setTarefas([...tarefas, novaTarefa.trim()]);
      setNovaTarefa("");
    }
  };

  const eventEnter = (event) => {
    if (event.key === 'Enter'){
      adicionarTarefa()
    }
  }

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  return (
    <>
      
      <br />
      <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>

      <div className="mb-4">
        <input
          type="text"
          value={novaTarefa}
          placeholder="Insira uma tarefa"
          onChange={(e) => setNovaTarefa(e.target.value)}
          onKeyDown={eventEnter}
          className="input input-bordered w-full mb-2"
        />
        <button
          className="btn bg-rose-400 text-rose-600 w-full"
          onClick={adicionarTarefa}
        >
          Adicionar tarefa
        </button>
      </div>

      <ul>
        {tarefas.map((tarefa, index) => (
          <Tarefa
            key={index}
            tarefa={tarefa}
            onRemover={() => removerTarefa(index)}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
