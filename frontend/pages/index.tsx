import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
//next는 React를  import할 필요 없다.NEXT가 pages안에 있는 page를 code split 해준다(폴더가 반드시 pages이어야 한다.)
import AppLayout from '../components/AppLayout';
import Login from './login';
const Home = () => {
    const { isLoggedIn } = useSelector((state: RootStateOrAny) => state.user);
    return (
        <>
            {isLoggedIn ? (
                <AppLayout>
                    < div className={"bg-yellow-700"} >
                        <h1 className="text-4xl text-red-400 mb-3">Hello, Next!</h1>
                    </div >
                </AppLayout >
            ) : <Login />
            }
        </>
    )
}

export default Home;