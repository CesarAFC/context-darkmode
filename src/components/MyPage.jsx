import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const initialTheme = 'light';
const initialLang = 'es';
const initialAuth = null;
;
const translations = {
  es: {
    headerTitle: "Mi aplicación SIN Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenid@ invitad@",
    mainHello: "Hola Usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página",
  },
  en: {
    headerTitle: "My application without Context API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

const MyPage = () => {
    const [theme, setTheme] = useState(initialTheme);
    const [language, setLanguage] = useState(initialLang);
    const [text, setText] = useState(translations[language]);
    const [auth, setAuth] = useState(initialAuth);

    const handleTheme = (e) => {
        e.target.value === 'light' ? setTheme('light') : setTheme('dark');
    }
    const handleLang = (e) => {
        (e.target.value === "es" ) ? (
            setLanguage("es"), 
            setText(translations.es)
            ) : (
                setLanguage("en"),
                setText(translations.en)
                );
    }
    const handleAuth = () => {
        auth ? setAuth(null) : setAuth(true)
    }
  return (
    <div className="my-page">
      <Header
        theme={theme}
        handleTheme={handleTheme}
        text={text}
        handleLang={handleLang}
        auth={auth}
        handleAuth={handleAuth}
      />
      <Main theme={theme} text={text} auth={auth}/>
      <Footer theme={theme} text={text} />
    </div>
  );
}

export default MyPage