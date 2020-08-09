import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import utaustin from '../images/utaustin.jpg'

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Henry\'s Personal Website'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Henry\'s Personal Website'} />

        <meta property="og:title" content="Henry Vuong's Personal Website" />
        <meta property="og:description" content="Welcome to my life! Feel free to look around." />
        <meta property='og:image' content={utaustin}></meta>
      </Helmet>
      <App />
    </>
  );
};
