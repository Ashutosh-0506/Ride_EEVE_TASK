import { Provider } from 'react-redux';
import { store } from '../redux/store'; // Adjust the path if necessary
import '../styles/globals.css'; // Include global styles if needed

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
