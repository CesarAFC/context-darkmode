import React from 'react'

const Header = ({theme, handleTheme, text, handleLang, auth, handleAuth}) => {
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
        id="light"
        value="light"
        onClick={handleTheme}
        defaultChecked
      />
      <label htmlFor="light">{text.headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="dark"
        value="dark"
        onClick={handleTheme}
      />
      <label htmlFor="dark">{text.headerDark}</label>
      <button onClick={handleAuth}>{auth ? text.buttonLogout : text.buttonLogin}</button>
    </header>
  );
}

export default Header