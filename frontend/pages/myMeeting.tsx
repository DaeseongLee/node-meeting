import React from 'react';
import { useCallback, useState } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import Login from './login';
import AppLayout from '../components/AppLayout';
import MeetingListItem from '../components/MeetingListItem';
import CreateMeetingModal from '../components/CreateMeetingModal';
import { useEffect } from 'react';


const MyMeeting = () => {
    const { isLoggedIn } = useSelector((state: RootStateOrAny) => state.user);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = useCallback(() => {
        setShowModal(prev => !prev);
    }, [showModal]);



    return (
        <>
            <AppLayout>
                {!showModal ? (
                    <div className="wrapper">
                        <div className="w-2/3 mx-auto md:relative xl:relative">
                            <button className="block mt-4 md:mt-0 xl:mt-0 px-4 py-2 mx-auto text-base rounded-full text-white  bg-indigo-500 md:absolute xl:absolute top-1 -right-40"
                                onClick={toggleModal}>
                                모임 만들기 +
                            </button>


                            <div className="container mt-8 flex flex-col mx-auto justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
                                <h1 className="ml-4 text-2xl text-indigo-700">내 모임</h1>
                                <hr />
                                <ul className="flex flex-col divide divide-y">
                                    <MeetingListItem />
                                </ul>
                            </div>

                            <div className="container mt-8 flex flex-col mx-auto justify-center bg-red-300 rounded-lg shadow">
                                <h1 className="ml-4 text-2xl text-indigo-700">내가 찜한 모임</h1>
                                <hr />
                                <ul className="flex flex-col divide divide-y">
                                    <MeetingListItem />
                                </ul>
                            </div>
                        </div>
                    </div>

                ) : <CreateMeetingModal showModal={showModal} />
                }
            </AppLayout >
        </>
    )
};




export default MyMeeting;