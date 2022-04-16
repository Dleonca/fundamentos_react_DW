import React from 'react'

const Contador = () => {
  const [contador, setContador] = React.useState(0)
  const aumentar = () => setContador(contador + 1)
  const decrementar = () => setContador(contador-1)

  return (
    <>
      <hr />
      <h1>Contador es : {contador}</h1>
      <h1>
        {
          contador < 0 ? 'contador negativo' : 'contador positivo'
        }
      </h1>
      <button onClick={aumentar}>Aumenta</button>
      <button onClick={decrementar}>Decrementa</button>
    </>
  )
}

export default Contador