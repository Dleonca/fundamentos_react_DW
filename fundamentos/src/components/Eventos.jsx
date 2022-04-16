import React from 'react'

const Eventos = () => {
    const [texto, setText] = React.useState('texto inicial')
    const eventoClick = () => {
       const aux ='texto inicial'
       if (texto == aux){
        setText('cambiando texto inicial...')
        return
       }
       setText(aux)
    }
   
  return (
    <>
    <h2>{texto}</h2>
    <button onClick={eventoClick}>Click</button>
    </>
  )
}

export default Eventos