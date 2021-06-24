import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import Login from './login';

import AppLayout from '../components/AppLayout';
import MeetingDetail from '../components/MeetingDetail';
const MyMeeting = () => {
    const { isLoggedIn } = useSelector((state: RootStateOrAny) => state.user);
    return (
        <>
            {isLoggedIn ? (
                <AppLayout>
                    <MeetingDetail />
                </AppLayout >
            ) : <Login />
            }
        </>
    )
};

export default MyMeeting;