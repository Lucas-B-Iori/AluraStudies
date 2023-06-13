import React, { useState } from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { ITarefa } from "../../types/ITarefa";

interface FormularioProps {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export default function Formulario({ setTarefas }: FormularioProps) {
  const [ tempo, setTempo ] = useState('00:00:00');
  const [ tarefa, setTarefa ] = useState('');

  function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTarefas(tarefasAntigas =>
      [...tarefasAntigas, 
        { 
          nome: tarefa, 
          tempo: tempo, 
          id: tarefasAntigas.length + 1,
          selecionado: false,
          completado: false
        }
      ]
      );
    setTarefa('');
    setTempo('00:00:00')
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          id="tarefa"
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type='submit'>Adicionar</Botao>
    </form>
  );
}
