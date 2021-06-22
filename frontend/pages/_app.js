import React from 'react';
import Head from 'next/head'; //Head를 쓰기 위해서...
import PropTypes from 'prop-types';
import '../styles/global.css'
// pages에서 공통적으로 쓰는 것들을 여기서 사용하자. ex)css import해주자
const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    );
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default App;