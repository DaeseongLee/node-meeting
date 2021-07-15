import React from 'react';

const MyFriendList = () => {
    return (
        <li className="flex flex-row">
            <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a href="#" className="block relative">
                        <img alt="profil" src="/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                    </a>
                </div>
                <div className="flex-1 pl-1 mr-16">
                    <div className="font-medium dark:text-white">
                        친구 이름
                    </div>
                </div>
            </div>
        </li>
    );
};

export default MyFriendList;