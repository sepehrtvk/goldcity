// // add bootstrap css
// import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import Layout from '../components/layout/layout';
// own css files here
import '../styles/scss/global.scss';

import 'bootstrap-icons/font/bootstrap-icons.css';
import { persistor, store } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
