function Tarefa({ tarefa, onRemover }) {
  return (
    <li className="flex justify-between items-center p-2 bg-gray-100 rounded mb-2 shadow-sm">
      <span className="text-lg">{tarefa}</span>
      <button
        className="btn btn-sm btn-outline btn-error ml-4"
        onClick={onRemover}
      >
        Remover
      </button>
    </li>
  );
}

export default Tarefa;
