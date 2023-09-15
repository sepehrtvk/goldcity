// // add bootstrap css
// import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/layout/layout';
// own css files here
import '../styles/scss/global.scss';

import 'bootstrap-icons/font/bootstrap-icons.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
