import React from 'react';
import style from'./Botao.module.scss';

interface BotaoProps {
  children: string,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}

export default function Botao({ children, type = 'button', onClick }: BotaoProps) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>{children}</button>
  )
}
