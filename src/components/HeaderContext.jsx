import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';
import LangContext from '../context/LangContext';
import ThemeContext from '../context/ThemeContext';

const HeaderContext = () => {
  const {theme, handleTheme} = useContext(ThemeContext);
  const {text, handleLang} = useContext(LangContext);
  const {auth, handleAuth} = useContext(AuthContext);

  return (
    <header className={theme}>
      <h2>{text.headerTitle}</h2>
      <h3>{text.headerSubtitle}</h3>
      <select name="language" onChange={handleLang}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        type="radio"
        name="theme"
        id="light-context"
        value="light"
        onClick={handleTheme}
        defaultChecked
      />
      <label htmlFor="light-context">{text.headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="dark-context"
        value="dark"
        onClick={handleTheme}
      />
      <label htmlFor="dark-context">{text.headerDark}</label>
      <button onClick={handleAuth}>{auth ? text.buttonLogout : text.buttonLogin}</button>
    </header>
  );
}

export default HeaderContext