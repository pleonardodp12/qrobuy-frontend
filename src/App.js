import GlobalStyles from './assets/styles/global';
import HeaderNav from './components/HeaderNav';
import Routes from './routes';

function App() {
  return (
    <>
      <HeaderNav />
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App;
