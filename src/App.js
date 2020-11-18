import './App.css';
import GlobalStyles from './assets/styles/global';
import BottomNavigation from './components/BottomNavigation';
import HeaderNav from './components/Header';
import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyles />
      <HeaderNav />
      <Routes />
      <BottomNavigation />
    </>
  );
}

export default App;
