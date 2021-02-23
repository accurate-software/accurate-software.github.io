import React, { Children } from 'react';

interface myProps{
  date: string;
}
const DateBr: React.FC<myProps> = props => {

  function adicionaZero(numero: string){
    const num = parseInt(numero);
    if (num <= 9) 
        return "0" + num;
    else
        return num; 
  }
  
  function dateBr(date: string){
    let dataAtual = new Date(date); 
    let dataAtualFormatada = adicionaZero(dataAtual.getDate().toString()) + "/" + adicionaZero( dataAtual.getMonth().toString()) + "/" + dataAtual.getFullYear();
    let date_final = dataAtualFormatada + ' ' + dataAtual.getHours() + ':' + dataAtual.getMinutes();
    return date_final;
  }

  return (
    <>
      {dateBr(props.date)}
    </>
  );
}

export default DateBr;