import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
const AppLayout = ({ children }) => {
    return (
        <div>
            <Link href="/">홈페이지</Link>
            <Link href="/createAccount">회원가입</Link>
            {children}
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;