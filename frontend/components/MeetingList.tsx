import React, { useMemo } from 'react';
import { LocationMarkerIcon } from '@heroicons/react/solid'
import { UserCircleIcon } from '@heroicons/react/solid'
import { LoginIcon } from '@heroicons/react/outline'

const MeetingList = () => {
    const svg = useMemo(() => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
        </path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>), [])
    return (
        <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
            {
                [1, 2, 3, 4, 5, 6].map(as => {
                    return (
                        <div className="flex flex-col">
                            <div className="bg-white shadow-md  rounded-3xl p-4">
                                <div className="flex-none lg:flex">
                                    <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                                        <img src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                                            alt="Just a flower" className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl" />
                                    </div>
                                    <div className="flex-auto ml-3 justify-evenly py-2">
                                        <div className="flex flex-wrap ">
                                            <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                                                음악/악기
                                            </div>
                                            <h2 className="flex-auto text-lg font-medium">드럼 모임</h2>
                                        </div>
                                        <p className="mt-3"></p>
                                        <div className="flex py-4  text-sm text-gray-600">
                                            <div className="flex-1 inline-flex items-center">
                                                <LocationMarkerIcon className="icon" />
                                                <p className="w-16">대구 중구</p>
                                            </div>
                                            <div className="flex-1 inline-flex items-center">
                                                <UserCircleIcon className="icon" />
                                                <p className="">16</p>
                                            </div>
                                        </div>
                                        <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                                        <div className="flex space-x-3 text-sm font-medium">
                                            <div className="flex-auto flex space-x-3">
                                                <button
                                                    className="mb-2 md:mb-0 bg-white px-5 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                                                    <span className="text-green-400 hover:text-green-500 rounded-lg">
                                                        <LoginIcon className="icon" />
                                                    </span>
                                                    <span>들어가기</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            };
        </div>
    )
};
export default MeetingList;