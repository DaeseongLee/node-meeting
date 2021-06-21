import React from 'react';
//next는 React를  import할 필요 없다.NEXT가 pages안에 있는 page를 code split 해준다(폴더가 반드시 pages이어야 한다.)
import AppLayout from '../components/AppLayout';
const Home = () => {
    return (
        <AppLayout>Hello, Next!</AppLayout>
    )
}

export default Home;