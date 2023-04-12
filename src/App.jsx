import MyPage from './components/MyPage'
import MyPageContext from './components/MyPageContext'
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ShoppinCart from './components/ShoppinCart';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <ShoppinCart/>
      <div className="">
        <MyPageContext />
        <hr />
        <MyPage />
      </div>
    </ThemeProvider>
  );
}

export default App
