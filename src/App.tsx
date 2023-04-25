import GlobalStyle from './view/styles/global'
import { ThemeProvider } from 'styled-components';
import light from './view/styles/themes/light';
import dark from './view/styles/themes/dark';
import usePeristedState from './utils/useperisted';
import RoutesPage from './view/routes';
import ThemeContainer from './view/components/contents/theme';

const App = () => {
  const [theme, setTheme] = usePeristedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <ThemeContainer toggleTheme={toggleTheme}/>
        <RoutesPage/>
      </div>
    </ThemeProvider>
  );
}

export default App;