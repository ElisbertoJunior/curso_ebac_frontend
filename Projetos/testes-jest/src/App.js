import { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [tarefaTemp, setTarefaTemp] = useState("");

  const cadastrarTarefa = () => {
    setTarefas([...tarefas, tarefaTemp]);
    setTarefaTemp("");
  };

  return (
    <div className="App">
      <input
        type="text"
        value={tarefaTemp}
        onChange={({ target }) => setTarefaTemp(target.value)}
      />
      <button type="button" onClick={cadastrarTarefa}>
        Cadastrar
      </button>
      <ul>
        {tarefas.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
