import React from 'react';

const MeetingInfo = () => {
    return (
        <div className="meetingDetailWrap">
            <div className="h-full w-full">
                <div className="h-1/6 w-full">
                    <img id="img-preview" className="h-full object-center mt-3 mx-auto"
                        src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                        alt="freepik image" />
                </div>

                <div className="bg-white space-y-6 border-2 border-black mt-2 rounded-xl">
                    <div className="flex flex-col w-full p-4 text-gray-500 ">
                        <h2 className="text-3xl text-indigo-900 font-bold">소개</h2>
                        <div>
                            <div className="w-full inline-flex border mt-4">
                                <p className="w-full">
                                    소개하는 글입니다소개하는 글입니다소개하는 글입니다소개하는 글입니다소개하는 글입니다소개하는 글입니다소개하는
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="text-sm text-gray-400">예정된 모임 정모</label>
                        <div className="w-full inline-flex border">
                            <div className=" bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <p>현재 정모가 없습니다.</p>
                        </div>
                    </div>

                    <div className="bg-gray-100 p-4 bg-opacity-5 rounded-t">
                        <div className="max-w-sm mx-auto md:w-full md:mx-0">
                            <div className="inline-flex items-center space-x-4">
                                <img
                                    className="w-10 h-10 object-cover rounded-full"
                                    alt="User avatar"
                                    src="https://avatars3.githubusercontent.com/u/72724639?s=400&u=964a4803693899ad66a9229db55953a3dbaad5c6&v=4"
                                />

                                <h1 className="text-gray-600">Charly Olivas</h1>
                                <h1 className="text-blue-600">모임장</h1>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="flex flex-col w-full p-4 text-gray-500 ">
                        <h2 className=" max-w-sm  text-3xl text-indigo-900 font-bold">모임 멤버</h2>
                        <div className="inline-flex items-center space-x-4 mt-8">
                            <img
                                className="w-10 h-10 object-cover rounded-full"
                                alt="User avatar"
                                src="https://avatars3.githubusercontent.com/u/72724639?s=400&u=964a4803693899ad66a9229db55953a3dbaad5c6&v=4"
                            />

                            <h1 className="text-gray-600">Charly Olivas</h1>
                        </div>
                        <div className="inline-flex items-center space-x-4 mt-8">
                            <img
                                className="w-10 h-10 object-cover rounded-full"
                                alt="User avatar"
                                src="https://avatars3.githubusercontent.com/u/72724639?s=400&u=964a4803693899ad66a9229db55953a3dbaad5c6&v=4"
                            />

                            <h1 className="text-gray-600">Charly Olivas</h1>
                        </div>
                        <div className="inline-flex items-center space-x-4 mt-8">
                            <img
                                className="w-10 h-10 object-cover rounded-full"
                                alt="User avatar"
                                src="https://avatars3.githubusercontent.com/u/72724639?s=400&u=964a4803693899ad66a9229db55953a3dbaad5c6&v=4"
                            />

                            <h1 className="text-gray-600">Charly Olivas</h1>
                        </div>
                    </div>
                    <hr />
                    <div className="md:inline-flex w-full">
                        <button className="text-white w-full md:w-40 xl:w-40 mx-auto max-w-sm rounded-md text-center bg-indigo-400 hover:bg-indigo-700 py-2 px-4 ">
                            나가기
                        </button>
                    </div>
                    <hr />
                </div>
            </div>
        </div >
    );
};

export default MeetingInfo;