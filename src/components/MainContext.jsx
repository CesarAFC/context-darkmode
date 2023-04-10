import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';
import LangContext from '../context/LangContext';
import ThemeContext from '../context/ThemeContext';

const MainContext = () => {
  const {theme} = useContext(ThemeContext);
  const {text} = useContext(LangContext);
  const {auth} = useContext(AuthContext);

  return (
    <main className={theme}>
        {auth ? <p>{text.mainWelcome}</p> : <p>{text.mainHello}</p>}
        <p>{text.mainContent}</p>
    </main>
  )
}

export default MainContext