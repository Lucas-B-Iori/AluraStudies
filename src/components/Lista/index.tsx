import style from './Lista.module.scss'
import Item from "./Item";
import { ITarefa } from '../../types/ITarefa';

interface ListaProps {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Lista({ tarefas, selecionaTarefa }: ListaProps) {
  
  return (
    <aside className={style.listaTarefas}>
      <h2>  
        Estudos do dia: 
      </h2>
      <ul>
        {tarefas.map((tarefa) => (
          <Item {...tarefa} key={tarefa.id} selecionaTarefa={selecionaTarefa}/>
        ))}
      </ul>
    </aside>
  );
}
