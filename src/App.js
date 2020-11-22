import GlobalStyles from './assets/styles/global';
import { Header } from './components/Header/styles';
import Routes from './routes';

function App() {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App;
