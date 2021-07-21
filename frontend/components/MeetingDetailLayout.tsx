import React, { useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { IdentificationIcon } from '@heroicons/react/solid'
import { ClipboardCheckIcon } from '@heroicons/react/solid'
import { PhotographIcon } from '@heroicons/react/solid'
import { ChatIcon } from '@heroicons/react/solid'

import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

interface MyProps {
    children?: React.ReactNode;
}



const AppLayout: React.FC<MyProps> = ({ children }) => {
    //const style = useMemo(() => ({marginTop: 10 }), [])
    //랜더링 해줄때 inLine으로 해주면 리랜더링 될 때마다 inline객체를 새로 생성해서 component 최적화가 안된다.그래서 이런식으로 memo를 통해서 사용하자

    const router = useRouter();
    const { currentPage } = useSelector((state: RootStateOrAny) => state.page);
    const dispatch = useDispatch();
    const setCurrentPage = useCallback((type) => {
        dispatch({
            type
        });
    }, [currentPage]);

    const pickColor = useCallback((page) => {
        if (page === currentPage) {
            return 'text-pink-600 border-indigo-600';
        }
    }, [currentPage]);

    const back = () => {
        router.back();
    }
    return (
        <>
            <header className="text-gray-100 bg-gray-900 body-font shadow w-full rounded-xl">
                <div className="container mx-auto p-5 flex justify-around ">
                    <nav className="flex justify-center w-full  text-base rounded-xl">
                        <Link href=""><a className={"headerLink"} onClick={back}>←뒤로가기</a></Link>
                        <Link href=""><a className={"headerLink " + (pickColor("main"))} onClick={() => setCurrentPage("MAIN")}>정보 <IdentificationIcon className="headerIcon" /></a></Link>
                        <Link href=""><a className={"headerLink " + (pickColor("post"))} onClick={() => setCurrentPage("POST")}>게시판<ClipboardCheckIcon className="headerIcon" /></a></Link>
                        <Link href=""><a className={"headerLink " + (pickColor("album"))} onClick={() => setCurrentPage("ALBUM")}>사진첩 <PhotographIcon className="headerIcon" /></a></Link>
                        <Link href=""><a className={"headerLink " + (pickColor("chat"))} onClick={() => setCurrentPage("CHAT")}>채팅 <ChatIcon className="headerIcon" /></a></Link>
                    </nav>
                </div>
            </header>
            {children}
        </>
    );
};


export default AppLayout;


