import GlobalStyles from './assets/styles/global';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Routes />
    </Provider>
  );
}

export default App;
