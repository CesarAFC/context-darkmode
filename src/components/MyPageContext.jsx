import React from 'react'
import { AuthProvider } from '../context/AuthContext';
import { LangProvider} from '../context/LangContext';
import { ThemeProvider } from '../context/ThemeContext';
import FooterContext from './FooterContext';
import HeaderContext from './HeaderContext';
import MainContext from './MainContext';


const MyPageContext = () => {



  return (
    <div className="my-page">
      <AuthProvider>
        <ThemeProvider>
          <LangProvider>
            <HeaderContext />
            <MainContext />
            <FooterContext />
          </LangProvider>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default MyPageContext