import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
//next는 React를  import할 필요 없다.NEXT가 pages안에 있는 page를 code split 해준다(폴더가 반드시 pages이어야 한다.)
import Login from './login';

import AppLayout from '../components/AppLayout';
import MeetingList from '../components/MeetingList';


const Home = () => {
    const { isLoggedIn } = useSelector((state: RootStateOrAny) => state.user);
    return (
        <>
            {isLoggedIn ? (
                <AppLayout>
                    <MeetingList />
                </AppLayout >
            ) : <Login />
            }
        </>
    )
}

export default Home;