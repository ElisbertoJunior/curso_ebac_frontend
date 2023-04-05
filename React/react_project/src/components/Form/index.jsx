import React, { useState } from 'react'

const Form = () => {
  const [meteriaA, setMateriaA] = useState(0);
  const [meteriaB, setMateriaB] = useState(0);
  const [meteriaC, setMateriaC] = useState(0);
  const [name, setName] = useState('');

  const changeName = ({ target }) => setName(target.value)

  const renderResult = () => {
    const sum = meteriaA + meteriaB + meteriaC;
    const average = sum / 3;

    return average >= 7 ? <p>Ola {name}! Voce foi Aprovado!</p> : <p>Ola {name}! Voce foi reprovado!</p>;

  }


  return (
    <form>
      <input type="text" placeholder='Seu nome' onChange={changeName}/>
      <input type="number" placeholder='Nota materia A' onChange={event => setMateriaA(parseInt(event.target.value))}/>
      <input type="number" placeholder='Nota materia B' onChange={event => setMateriaB(parseInt(event.target.value))}/>
      <input type="number" placeholder='Nota materia C' onChange={event => setMateriaC(parseInt(event.target.value))}/>
      {renderResult()}
     
    </form>
  )
}

export default Form