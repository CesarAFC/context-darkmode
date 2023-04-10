import React, { useContext } from 'react'
import LangContext from '../context/LangContext';
import ThemeContext from '../context/ThemeContext';

const FooterContext = () => {
  const {theme} = useContext(ThemeContext);
  const {text} = useContext(LangContext);
  return (
    <footer className={theme}>
        <h4>{text.footerTitle}</h4>
    </footer>
  )
}

export default FooterContext