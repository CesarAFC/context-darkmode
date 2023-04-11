import MyPage from './components/MyPage'
import MyPageContext from './components/MyPageContext'
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="">
        <MyPageContext />
        <hr />
        <MyPage />
      </div>
    </ThemeProvider>
  );
}

export default App
