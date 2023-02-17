import React, { useState } from 'react'

// Create a context = global state
const ContextTheme = React.createContext();


// Create a provider = global state provider

const ProviderTheme = ({ children }) => {

  const [theme, changeTheme] = useState({
    alineado: 'left',
    fuente: 20
  });

  const aumentarFuente = () => { changeTheme({ ...theme, fuente: theme.fuente + 2 }); }

  const disminuirFuente = () => { changeTheme({ ...theme, fuente: theme.fuente - 2 }); }

  const alinearIzquierda = () => { changeTheme({ ...theme, alineado: 'left' }); }
  const alinearCentro = () => { changeTheme({ ...theme, alineado: 'center' }); }
  const alinearDerecha = () => { changeTheme({ ...theme, alineado: 'right' }); }

  return (
    <ContextTheme.Provider value={{ theme, aumentarFuente, disminuirFuente, alinearIzquierda, alinearCentro, alinearDerecha }}>
      {children}
    </ContextTheme.Provider>
  );
}

export { ContextTheme, ProviderTheme };