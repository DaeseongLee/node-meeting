import React, { useMemo } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
const AppLayout = ({ children }) => {
    //const style = useMemo(() => ({ marginTop: 10 }), []) 
    //랜더링 해줄때 inLine으로 해주면 리랜더링 될 때마다 inline객체를 새로 생성해서 component 최적화가 안된다.그래서 이런식으로 memo를 통해서 사용하자

    return (
        <div>
            {/* // <div style={style}> */}
            <Link href="/"><a>홈페이지</a></Link>
            <Link href="/createAccount"><a>회원가입</a></Link>
            {children}
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;