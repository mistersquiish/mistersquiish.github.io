import React from 'react';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';
import Tinder from '../components/Tinder';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
    const { lang } = headData;

    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Henry's Tinder Profile</title>
            <html lang={lang || 'en'} />
            <meta name="description" content="Henry's Tinder profile"/>
        </Helmet>
        <Tinder />
        </>
    );
};
