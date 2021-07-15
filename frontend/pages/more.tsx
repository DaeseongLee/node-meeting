import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import Login from './login';

import AppLayout from '../components/AppLayout';
import UserInfo from '../components/UserInfo';
import MyFriendList from '../components/MyFriendList';

const More = () => {
    const { isLoggedIn } = useSelector((state: RootStateOrAny) => state.user);
    return (
        <>
            {isLoggedIn ? (
                <AppLayout>
                    <div className="w-2/3 md:relative xl:relative">
                        <div>
                            <h1 className="ml-4 mt-8 text-2xl text-indigo-700">내 정보 수정</h1>
                            <UserInfo />
                        </div>

                        <div className="container mt-8 flex flex-col mx-auto justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
                            <h1 className="ml-4 text-2xl text-indigo-700">내 친구</h1>
                            <hr />
                            <ul className="flex flex-col divide divide-y">
                                <MyFriendList />
                            </ul>
                        </div>
                    </div>
                </AppLayout >

            ) : <Login />
            }
        </>
    )
};

export default More;