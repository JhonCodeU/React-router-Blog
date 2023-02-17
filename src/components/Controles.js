import React, { useContext } from 'react'
import styled from 'styled-components'
import { ContextTheme } from '../context/contextTheme';

const Controles = () => {

  const { aumentarFuente, disminuirFuente } = useContext(ContextTheme);
  const { alinearIzquierda, alinearCentro, alinearDerecha } = useContext(ContextTheme);

  return (
    <div>
      <ContenedorControles>
        <Boton onClick={aumentarFuente}>Aumentar fuente</Boton>
        <Boton onClick={disminuirFuente}>Disminuir fuente</Boton>
      </ContenedorControles>
      <ContenedorControles>
        <Boton onClick={alinearIzquierda}>Alinear a la izquierda</Boton>
        <Boton onClick={alinearCentro}>Alinear al centro</Boton>
        <Boton onClick={alinearDerecha}>Alinear a la derecha</Boton>
      </ContenedorControles>
    </div>
  );
}

const ContenedorControles = styled.div`
    margin-top: 20px;
`;

const Boton = styled.button`
    background: #165168;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 12px;
    padding: 7px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 3px;
 
    &:hover {
        background: #191668;
    }
`;

export default Controles;