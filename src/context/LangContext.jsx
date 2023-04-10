import { createContext, useState } from "react";

const LangContext = createContext();
const initialLang = 'es';
const translations = {
    es: {
      headerTitle: "Mi aplicación CON Context API",
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
      headerTitle: "My application with Context API",
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

const LangProvider = ({children}) => {
    const [language, setLanguage] = useState(initialLang);
    const [text, setText] = useState(translations[language]);

    const handleLang = (e) => {
        (e.target.value === "es" ) ? (
            setLanguage("es"), 
            setText(translations.es)
            ) : (
                setLanguage("en"),
                setText(translations.en)
                );
    }

    const data = {text, handleLang };
    return (
        <LangContext.Provider value={data}>
            {children}
        </LangContext.Provider>
    )
}
export {LangProvider}
export default LangContext;