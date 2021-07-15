import React from 'react';
import Link from 'next/link';
import { SearchIcon } from '@heroicons/react/solid'
import { DotsHorizontalIcon } from '@heroicons/react/solid'
import { IdentificationIcon } from '@heroicons/react/solid'
import { useCallback } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

interface MyProps {
    children?: React.ReactNode;
}



const AppLayout: React.FC<MyProps> = ({ children }) => {
    //const style = useMemo(() => ({marginTop: 10 }), [])
    //랜더링 해줄때 inLine으로 해주면 리랜더링 될 때마다 inline객체를 새로 생성해서 component 최적화가 안된다.그래서 이런식으로 memo를 통해서 사용하자

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
    }, [currentPage])
    return (
        <>
            <header className="text-gray-100 bg-gray-900 body-font shadow w-full rounded-xl">
                <div className="container mx-auto p-5 flex justify-around ">
                    <nav className="flex justify-center w-full  text-base rounded-xl">
                        <Link href="/"><a className={"headerLink " + (pickColor("main"))} onClick={() => setCurrentPage("MAIN")}>모임's <SearchIcon className="headerIcon" /></a></Link>
                        <Link href="/myMeeting"><a className={"headerLink " + (pickColor("my_meeting"))} onClick={() => setCurrentPage("MY_MEETING")}>내 모임<IdentificationIcon className="headerIcon" /></a></Link>
                        <Link href="/more"><a className={"headerLink " + (pickColor("more"))} onClick={() => setCurrentPage("MORE")}>더보기 <DotsHorizontalIcon className="headerIcon" /></a></Link>
                    </nav>
                </div>
            </header>
            {children}
        </>
    );
};


export default AppLayout;


