import React from "react";
import style from "./Item.module.scss";
import { ITarefa } from "../../../types/ITarefa";

interface ItemProps extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({
  nome,
  tempo,
  id,
  selecionado,
  completado,
  selecionaTarefa,
}: ItemProps) {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${completado ? style.itemCompletado : ''}`}
      onClick={() =>
        !completado && selecionaTarefa({
          nome,
          tempo,
          id,
          selecionado,
          completado,
        })
      }
    >
      <h3>{nome}</h3>
      <span>{tempo}</span>
      {completado ? <span className={style.concluido} aria-label="tarefa completada"></span> : ''}
    </li>
  );
}
