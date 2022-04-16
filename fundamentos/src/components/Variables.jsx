import React from "react";

const Variables = () => {
  const saludo = "Hola Mundo";
  const imagen = "https://picsum.photos/id/237/200/300";
  const textoAlternativo = "este es un perrito";

  return (
    <>
      <h1>{saludo}</h1>
      <img src={imagen} alt={textoAlternativo} />
    </>
  );
};

export default Variables;
