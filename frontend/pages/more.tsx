import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import Login from './login';

import AppLayout from '../components/AppLayout';
import UserInfo from '../components/UserInfo';
const More = () => {
    const { isLoggedIn } = useSelector((state: RootStateOrAny) => state.user);
    return (
        <>
            {isLoggedIn ? (
                <AppLayout>
                    <UserInfo />
                </AppLayout >
            ) : <Login />
            }
        </>
    )
};

export default More;